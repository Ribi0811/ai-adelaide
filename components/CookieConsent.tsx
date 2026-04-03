'use client';

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      setShowConsent(false);
    } else if (consent === 'declined') {
      setShowConsent(false);
    } else {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
    onDecline?.();
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] px-6 pb-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Cookie Consent
                </span>
              </div>
              <h3 className="mb-2 text-lg md:text-xl font-semibold text-slate-950">
                We use cookies to enhance your experience
              </h3>
              <p className="text-sm md:text-base text-slate-600">
                Our site uses cookies to improve functionality and analyze traffic. 
                We use essential cookies for site operation and analytics cookies 
                (Google Analytics) to understand how visitors use our site. 
                You can opt out of analytics cookies if you prefer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm md:text-base hover:bg-slate-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 rounded-xl bg-accent text-white font-medium text-sm md:text-base hover:bg-slate-900 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
