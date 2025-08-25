// components/ContactReCaptcha.tsx
'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useState, useEffect } from 'react';

interface ContactReCaptchaProps {
  children: React.ReactNode;
}

export default function ContactReCaptcha({ children }: ContactReCaptchaProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Only render on client-side
  if (!domLoaded) {
    return <div className="min-h-screen bg-slate-50"></div>; 
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}