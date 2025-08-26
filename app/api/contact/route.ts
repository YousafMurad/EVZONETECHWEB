import { NextRequest, NextResponse } from 'next/server';
import { addContactSubmission } from '@/lib/googleSheetsClient';
import { sendContactFormEmail } from '@/lib/emailService';
import { RateLimiter } from '@/lib/rateLimiter';

// Create a rate limiter for contact form submissions
const limiter = RateLimiter({
  interval: 60 * 1000, // 1 minute
  limit: 3, // 3 requests per minute
  uniqueTokenPerInterval: 500
});

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';
    
    // Apply rate limiting
    try {
      await limiter.check(Date.now(), ip);
    } catch {
      return NextResponse.json(
        { error: 'Too many requests, please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const { fullName, email, projectType, priority, projectScope, recaptchaToken } = await req.json();

    // Validate required fields
    if (!fullName || !email || !projectScope) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // TODO: Verify reCAPTCHA token if needed

    // Store in Google Sheets (existing functionality)
    const sheetResult = await addContactSubmission({
      fullName,
      email,
      projectType,
      priority,
      projectScope
    });

    // Send email notifications (new functionality)
    const emailResult = await sendContactFormEmail({
      fullName,
      email,
      projectType,
      priority,
      projectScope
    });

    // Return appropriate response based on combined results
    if (sheetResult.success && emailResult) {
      return NextResponse.json({ success: true });
    } else if (sheetResult.success) {
      // Still consider the submission successful if just the email fails
      console.warn('Contact form submission saved to sheets but email failed to send');
      return NextResponse.json({ 
        success: true, 
        warning: 'Your submission was received, but confirmation email could not be sent.' 
      });
    } else {
      return NextResponse.json(
        { error: sheetResult.error || 'Failed to process your submission.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
