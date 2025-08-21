import { NextRequest, NextResponse } from 'next/server';
import { addNewsletterSubscription } from '@/lib/googleSheetsClient';
import { sendNewsletterConfirmationEmail } from '@/lib/emailService';
import { RateLimiter } from '@/lib/rateLimiter';

// Create a rate limiter for newsletter submissions
const limiter = RateLimiter({
  interval: 60 * 1000, // 1 minute
  limit: 5, // 5 requests per minute
  uniqueTokenPerInterval: 500,
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
    const { email, recaptchaToken } = await req.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // TODO: Verify reCAPTCHA token if needed

    // Add subscription to Google Sheets
    const result = await addNewsletterSubscription(email);

    if (!result.success) {
      // Handle already subscribed case with specific status code
      if (
        result.error ===
        'This email is already subscribed to our newsletter'
      ) {
        return NextResponse.json(
          { error: result.error },
          { status: 409 } // 409 Conflict is appropriate for duplicates
        );
      }

      return NextResponse.json(
        { error: result.error || 'Failed to add subscription.' },
        { status: 500 }
      );
    }

    // Send confirmation email
    const emailSent = await sendNewsletterConfirmationEmail(email);

    if (!emailSent) {
      console.warn(
        'Newsletter subscription saved but confirmation email failed to send'
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
