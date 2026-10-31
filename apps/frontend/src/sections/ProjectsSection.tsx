import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'LALALALALLALALALAL',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', '????', 'PostgreSQL'],
    githubUrl: 'https://github.com/???????',
    liveUrl: 'https://?????.com',
    featured: true,
    category: 'Web App',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another short description of the project.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'API',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="mt-6 flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border border-gray-300 rounded-lg p-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs bg-gray-100 rounded px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} className="text-sm underline">
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="text-sm underline">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
