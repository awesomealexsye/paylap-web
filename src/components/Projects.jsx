import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of successful digital transformations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                {/* Placeholder for actual images - using a gradient fallback if image fails or for demo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <span className="text-gray-600 text-sm">Project Preview</span>
                                </div>
                                {/* If you have images, uncomment below */}
                                {/* <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-dark rounded-full font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        Visit Site <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
