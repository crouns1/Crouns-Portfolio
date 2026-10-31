import React from 'react';

const skills = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
