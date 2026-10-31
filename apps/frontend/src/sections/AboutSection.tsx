import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          I am a full-stack developer who enjoys building web applications from
          front-end interfaces to back-end APIs and databases.
        </p>
        <p>
          My background includes software engineering, problem solving, and a
          passion for creating useful, clean, and maintainable products.
        </p>
        <p>
          Outside of work, I enjoy contributing to open source, learning new
          technologies, and building side projects.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
