"use client";
import React, { useState } from "react";

const ContactMe = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-20 px-6">
      {/* 1. Background Elements (Matches TechStack Theme) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5)_0%,rgba(0,0,0,1)_100%)] pointer-events-none"></div>

      {/* Decorative Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 tracking-tighter pb-2">
            Let's Build Together
          </h2>
          <p className="text-lg text-white/60 max-w-lg mx-auto font-light">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>

        {/* 3. Contact Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Email Card (Copyable) */}
          <ContactCard
            icon={<MailIcon />}
            label="Email Me"
            value="sidhikyaseen@gmail.com"
            copyable
            color="hover:border-purple-500/50 hover:shadow-purple-500/20"
          />

          {/* LinkedIn Card (Link) */}
          <ContactCard
            icon={<LinkedInIcon />}
            label="Connect on LinkedIn"
            value="linkedin.com/in/yaseensidhik"
            href="https://linkedin.com/in/yaseensidhik/"
            color="hover:border-blue-500/50 hover:shadow-blue-500/20"
          />

          {/* GitHub Card (Link) */}
          <ContactCard
            icon={<GithubIcon />}
            label="Check my Code"
            value="github.com/Nosawkid"
            href="https://github.com/Nosawkid"
            color="hover:border-gray-500/50 hover:shadow-white/10"
          />

          {/* Phone Card (Copyable) */}
          <ContactCard
            icon={<PhoneIcon />}
            label="Call Me"
            value="+91 9633702159"
            copyable
            color="hover:border-green-500/50 hover:shadow-green-500/20"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-white/30 text-sm font-mono text-center">
          Based in Bengaluru, Karnataka
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component: Contact Card ---
const ContactCard = ({ icon, label, value, href, copyable, color }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    if (copyable) {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const Wrapper = href ? "a" : "div";
  const props = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : { onClick: handleClick };

  return (
    <Wrapper
      {...props}
      className={`relative group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer ${color} hover:-translate-y-1`}
    >
      {/* Icon Box */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 group-hover:scale-110 transition-transform text-white/80 group-hover:text-white">
        {copied ? <CheckIcon /> : icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-xs font-mono text-white/40 uppercase tracking-wider group-hover:text-white/60 transition-colors">
          {copied ? "Copied!" : label}
        </span>
        <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors break-all">
          {value}
        </span>
      </div>

      {/* Arrow/Action Icon (Absolute Right) */}
      <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 text-white/50">
        {copyable ? <CopyIcon /> : <ExternalLinkIcon />}
      </div>
    </Wrapper>
  );
};

export default ContactMe;

// --- ICONS (SVGs) ---
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
