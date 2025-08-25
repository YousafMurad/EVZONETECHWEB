// components/ContactReCaptcha.tsx
'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useState, useEffect } from 'react';

import { ReactNode } from 'react';

export default function ContactReCaptcha({ children }: { children: ReactNode }) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    
    // Add global error handler to catch reCAPTCHA errors
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (
        (typeof message === 'string' && message.includes('recaptcha')) ||
        (typeof source === 'string' && source.includes('recaptcha'))
      ) {
        setRecaptchaError(true);
        return true; // Prevent default error handling
      }
      return originalOnError?.(message, source, lineno, colno, error);
    };
    
    return () => {
      window.onerror = originalOnError;
    };
  }, []);

  // Only render on client-side to avoid hydration mismatch
  if (!domLoaded) {
    return <div className="min-h-screen bg-slate-50"></div>;
  }

  // If there's an error with reCAPTCHA, render children without the provider
  if (recaptchaError) {
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}