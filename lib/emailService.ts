import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Email content interface
export interface EmailContent {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

// Create an OAuth2 client for Gmail authentication
const createOAuth2Client = () => {
  const OAuth2 = google.auth.OAuth2;
  
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN
  });

  return oauth2Client;
};

// Initialize nodemailer transporter with OAuth2
const createTransporter = async () => {
  try {
    const oauth2Client = createOAuth2Client();
    
    // Get access token
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err || !token) {
          console.error('Failed to get access token', err);
          reject(err || new Error('Access token is undefined'));
          return;
        }
        resolve(token);
      });
    });

    console.log('Gmail OAuth2: Successfully obtained access token');
    
    // Create transporter with OAuth2
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken
      }
    });
  } catch (error) {
    console.error('Error creating email transporter:', error);
    throw error;
  }
};

// Send a standard email
export const sendEmail = async ({ 
  to, 
  subject, 
  text, 
  html, 
  replyTo
}: EmailContent): Promise<boolean> => {
  try {
    const transporter = await createTransporter();
    
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      replyTo
    });

    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Send contact form notification
export const sendContactFormEmail = async ({
  fullName,
  email,
  projectType,
  priority,
  projectScope
}: {
  fullName: string;
  email: string;
  projectType: string;
  priority: string;
  projectScope: string;
}): Promise<boolean> => {
  // Email to site owner/admin
  const adminEmailResult = await sendEmail({
    to: process.env.SMTP_USER!,
    subject: `New Contact Form Submission: ${projectType} (${priority})`,
    text: `
      New project inquiry from ${fullName} (${email})
      
      Project Type: ${projectType}
      Priority: ${priority}
      
      Project Scope:
      ${projectScope}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0d9488; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Project Inquiry</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <h2 style="color: #0d9488;">Contact Details</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <h2 style="color: #0d9488;">Project Information</h2>
          <p><strong>Type:</strong> ${projectType}</p>
          <p><strong>Priority:</strong> ${priority}</p>
          
          <h2 style="color: #0d9488;">Project Scope</h2>
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #0d9488;">
            <p>${projectScope.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 10px; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} EvZone Tech. All rights reserved.</p>
        </div>
      </div>
    `,
    replyTo: email
  });
  
  // Confirmation email to the user
  const userEmailResult = await sendEmail({
    to: email,
    subject: 'Thank you for contacting EvZone Tech',
    text: `
      Dear ${fullName},
      
      Thank you for reaching out to EvZone Tech! We have received your inquiry about ${projectType} services.
      
      Our team will review your request and get back to you shortly.
      
      Project Details:
      - Project Type: ${projectType}
      - Priority: ${priority}
      
      We look forward to the possibility of working with you!
      
      Best regards,
      The EvZone Tech Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0d9488; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting Us</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <p>Dear ${fullName},</p>
          
          <p>Thank you for reaching out to EvZone Tech! We have received your inquiry about <strong>${projectType}</strong> services.</p>
          
          <p>Our team will review your request and get back to you shortly.</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #0d9488; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0d9488;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Priority:</strong> ${priority}</p>
          </div>
          
          <p>We look forward to the possibility of working with you!</p>
          
          <p>Best regards,<br>The EvZone Tech Team</p>
        </div>
        
        <div style="text-align: center; padding: 10px; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} EvZone Tech. All rights reserved.</p>
        </div>
      </div>
    `
  });
  
  return adminEmailResult && userEmailResult;
};

// Send newsletter subscription confirmation
export const sendNewsletterConfirmationEmail = async (email: string): Promise<boolean> => {
  return await sendEmail({
    to: email,
    subject: 'Welcome to Evzone Pulse!',
    text: `
      Thank you for subscribing to Evzone Pulse!

      You will now receive updates about our latest services, industry insights, and special offers.
      
      If you wish to unsubscribe at any time, simply click the unsubscribe link at the bottom of our Evzone Pulse.
      
      Best regards,
      The EvZone Tech Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0d9488; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Welcome to Our Evzone Pulse!</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <p>Thank you for subscribing to Evzone Pulse!</p>

          <p>You will now receive updates about our latest services, industry insights, and special offers.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://evzonetech.com/blog" style="background-color: #0d9488; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Check Out Our Blog</a>
          </div>
          
          <p style="font-size: 12px; color: #6b7280;">If you wish to unsubscribe at any time, simply click the unsubscribe link at the bottom of our Evzone Pulse emails.</p>
        </div>
        
        <div style="text-align: center; padding: 10px; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} EvZone Tech. All rights reserved.</p>
        </div>
      </div>
    `
  });
};
