import React from "react";

const messages = [
  "🎉 Celebrating Our 50th Batch at Vaarahi!",
  "🎁 FREE SQL Course – Exclusively for Our 50th Batch Students!",
  "🗄️ Master SQL from Scratch – Absolutely Free of Cost!",
  "🏆 50 Batches Strong – Join the Legacy at Vaarahi!",
  "📊 Enroll Now & Get a FREE SQL Course Worth ₹5,000!",
  "🚀 50th Batch Special Offer – Limited Seats Available!",
  "✨ Learn SQL for Free – Only with Vaarahi's Golden 50th Batch!",
  "👆 Click the Banner to Register for FREE!",
];

const REGISTRATION_LINK = "https://forms.gle/fVA5dkRbvi6w76aJA";

const ScrollingBanner: React.FC = () => {
  // Duplicate messages so the scroll looks seamless
  const track = [...messages, ...messages];

  return (
    <a
      href={REGISTRATION_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="scrolling-banner"
      style={{ display: "block", cursor: "pointer", textDecoration: "none" }}
      aria-label="Register for free SQL course – 50th batch offer"
    >
      {/* Scrolling text */}
      <div className="scrolling-banner__track">
        {track.map((msg, i) => (
          <span key={i} className="scrolling-banner__item">
            {msg}
            <span className="scrolling-banner__divider" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>

      {/* Static CTA badge always visible on the right */}
      <span className="scrolling-banner__cta" aria-hidden="true">
        Register Free →
      </span>
    </a>
  );
};

export default ScrollingBanner;
