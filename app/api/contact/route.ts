import { NextRequest, NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA if token is provided
    if (recaptchaToken && recaptchaToken !== "no-recaptcha") {
      try {
        const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
        const recaptchaResponse = await fetch(verifyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });
        
        const recaptchaResult = await recaptchaResponse.json();
        
        if (!recaptchaResult.success) {
          return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        // Continue if reCAPTCHA verification fails, but log the error
      }
    }

    // Connect to database
    await connectToDatabase()

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    })

    await contact.save()

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectToDatabase()
    const contacts = await Contact.find().sort({ createdAt: -1 })
    
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

