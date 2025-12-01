import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Apple, Play, Activity, Heart, TrendingUp } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web');

    const iconMap = {
        Activity: Activity,
        Heart: Heart,
        TrendingUp: TrendingUp
    };

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Our <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                        Showcasing our expertise across web platforms and mobile applications.
                    </p>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'web'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <Globe size={20} /> Web Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('mobile')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'mobile'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <Smartphone size={20} /> Mobile Apps
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {activeTab === 'web' ? (
                            // Web Projects
                            projectsData.web.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
                                >
                                    <div className="relative h-64 overflow-hidden bg-gray-900 group-hover:shadow-2xl transition-all duration-500">
                                        <iframe
                                            src={project.liveUrl}
                                            title={project.name}
                                            className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                                            loading="lazy"
                                            scrolling="no"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                            >
                                                Visit Live Site <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-blue-300 border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Mobile Projects
                            projectsData.mobile.map((app, index) => {
                                const Icon = iconMap[app.icon] || Activity;
                                return (
                                    <motion.div
                                        key={app.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                                        className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group perspective-1000 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                                    >
                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-black shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                                            Editor's Choice
                                        </div>

                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-xl shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                                            <Icon size={48} className="text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-1">{app.name}</h3>

                                        <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed">
                                            {app.description}
                                        </p>

                                        <div className="flex flex-col w-full gap-3 mt-auto">
                                            <a
                                                href={app.iosUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 px-4 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-white/20"
                                            >
                                                <Apple size={20} fill="currentColor" /> App Store
                                            </a>
                                            <a
                                                href={app.androidUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 px-4 py-3 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
                                            >
                                                <Play size={20} fill="currentColor" /> Google Play
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
