/**
 * Verify Google reCAPTCHA token
 */
export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('Missing reCAPTCHA secret key');
      return false;
    }
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    return data.success === true && data.score >= 0.5; // For v3 reCAPTCHA
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}
