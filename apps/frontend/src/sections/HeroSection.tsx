import React from 'react';
import heroImg from '../assets/hero.png';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/crouns1' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/crouns' },
  { label: 'Email', href: 'mailto:jait-chd@1337.student.ma' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto text-center py-16 px-4">
      <img
        src={heroImg}
        alt="Your profile"
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />
      <h1 className="mt-6 text-4xl font-bold">Your Name</h1>
      <p className="mt-2 text-xl text-gray-600">Full-Stack Developer</p>
      <p className="mt-4 text-gray-700">
        I build modern web applications with React, Node.js, and PostgreSQL.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
