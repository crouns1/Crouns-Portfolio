import React from 'react';
import { BackendStatus } from '../components/BackendStatus';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/crouns1' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/crouns' },
  { label: 'Email', href: 'mailto:jait-chd.student@1337.com' },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm underline">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <BackendStatus />
      </div>
    </footer>
  );
};

export default FooterSection;
