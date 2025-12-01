import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Apple, Play, Activity, Heart, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import projectsData from '../data/projects.json';

// Starfield Background Component
const Starfield = () => {
    const stars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
};

// Shooting Star Component
const ShootingStar = ({ delay }) => {
    return (
        <motion.div
            className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: '0%', y: '0%', opacity: 0 }}
            animate={{
                x: ['0%', '100vw'],
                y: ['0%', '50vh'],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 10 + 5,
            }}
            style={{
                left: `${Math.random() * 50}%`,
                top: `${Math.random() * 30}%`,
                transform: 'rotate(-45deg)',
            }}
        />
    );
};

// Floating Particle Component
const FloatingParticles = () => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 3,
        color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'][Math.floor(Math.random() * 4)],
        duration: Math.random() * 20 + 15,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full blur-sm"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: particle.color,
                        opacity: 0.3,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, -50, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[520px] rounded-[3rem] transition-all duration-700"
        >
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[3rem] opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700 animate-pulse" />

            {/* Main Card Container */}
            <div className="relative h-full bg-dark/60 backdrop-blur-2xl border-2 border-white/10 hover:border-white/30 rounded-[3rem] overflow-hidden transition-all duration-700 shadow-2xl shadow-purple-900/20 group-hover:shadow-purple-600/40">

                {/* Floating Glow Behind */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        rotate: isHovered ? [0, 180, 360] : 0,
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                />

                {/* Sparkle Effect */}
                <motion.div
                    className="absolute top-4 right-4 z-30"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity },
                    }}
                >
                    <Sparkles className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </motion.div>

                {/* Image/Preview Section */}
                <div className="h-[280px] w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark z-10" />

                    {/* Simulated Browser Bar */}
                    <motion.div
                        className="absolute top-6 left-6 right-6 z-20 flex gap-3 backdrop-blur-md bg-dark/40 p-3 rounded-2xl border border-white/10"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                    >
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                        <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                        <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    </motion.div>

                    <motion.div
                        animate={{ scale: isHovered ? 1.15 : 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"
                    >
                        <iframe
                            src={project.liveUrl}
                            title={project.name}
                            className="w-full h-full border-0 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
                            loading="lazy"
                            scrolling="no"
                        />
                    </motion.div>

                    {/* Floating Tech Stack */}
                    <motion.div
                        className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                            y: isHovered ? 0 : 20,
                            opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.techStack.map((tech, i) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl text-white border border-white/20 shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: isHovered ? 1 : 0,
                                    rotate: isHovered ? 0 : -180
                                }}
                                transition={{ delay: i * 0.05, type: "spring", bounce: 0.5 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between relative z-20 h-[240px]">
                    <div>
                        <motion.h3
                            className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500"
                            animate={{ x: isHovered ? 10 : 0 }}
                        >
                            {project.name}
                        </motion.h3>
                        <p className="text-gray-400 text-base leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/20 transition-colors">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm font-bold text-white group/link"
                        >
                            <motion.span
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/50"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                            >
                                <ExternalLink size={20} />
                            </motion.span>
                            <motion.span
                                className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                                animate={{ x: isHovered ? 0 : -20 }}
                            >
                                Visit Live Site
                            </motion.span>
                        </a>

                        <motion.div
                            className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all backdrop-blur-xl"
                            animate={{ rotate: isHovered ? 45 : 0 }}
                        >
                            <ArrowRight size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const MobileProjectCard = ({ app, index, iconMap }) => {
    const Icon = iconMap[app.icon] || Activity;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -15, scale: 1.05 }}
            className="group relative bg-dark/60 backdrop-blur-2xl border-2 border-white/10 rounded-[3rem] p-10 overflow-hidden hover:border-pink-500/40 transition-all duration-700 shadow-2xl shadow-pink-900/20 hover:shadow-pink-600/40"
        >
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[3rem] opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700 animate-pulse" />

            {/* Background Icon */}
            <motion.div
                className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                animate={{
                    rotate: isHovered ? [0, 10, -10, 0] : 0,
                    scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Icon size={250} />
            </motion.div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                    <motion.div
                        className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-600 to-red-500 flex items-center justify-center shadow-2xl shadow-purple-500/40"
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <Icon size={48} className="text-white drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold shadow-xl"
                        animate={{
                            rotate: isHovered ? 0 : 6,
                            y: isHovered ? -5 : 0,
                        }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        {app.rating} ★
                    </motion.div>
                </div>

                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-500">
                    {app.name}
                </h3>
                <p className="text-gray-400 text-base mb-10 leading-relaxed flex-1 group-hover:text-gray-200 transition-colors">
                    {app.description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-4">
                    <motion.a
                        href={app.iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 bg-white text-black rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Apple size={18} fill="currentColor" /> App Store
                    </motion.a>
                    <motion.a
                        href={app.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-white/20 text-white rounded-2xl font-bold text-sm backdrop-blur-xl hover:bg-white/10 transition-all shadow-lg"
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play size={18} fill="currentColor" /> Play Store
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web');

    const iconMap = {
        Activity: Activity,
        Heart: Heart,
        TrendingUp: TrendingUp
    };

    return (
        <section id="projects" className="py-40 relative bg-gradient-to-b from-dark via-purple-950/10 to-dark overflow-hidden">
            {/* Space Background Elements */}
            <Starfield />
            <FloatingParticles />

            {/* Shooting Stars */}
            {[0, 3, 6, 9].map((delay) => (
                <ShootingStar key={delay} delay={delay} />
            ))}

            {/* Nebula Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-cyan-600/15 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        delay: 4,
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-28">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Portfolio ✦
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="text-6xl md:text-8xl font-bold font-heading text-white mb-6"
                    >
                        Our Galactic{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                            Creations
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore our universe of innovative projects, where cutting-edge technology meets stunning design
                    </motion.p>

                    {/* Tab Switcher */}
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="p-2 bg-dark/60 border-2 border-white/10 rounded-full flex gap-3 backdrop-blur-2xl shadow-2xl">
                            {['web', 'mobile'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-10 py-4 rounded-full text-base font-bold transition-all duration-500 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-xl shadow-purple-500/50"
                                            transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-3 capitalize">
                                        {tab === 'web' ? <Globe size={20} /> : <Smartphone size={20} />}
                                        {tab} Projects
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {activeTab === 'web' ? (
                            projectsData.web.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))
                        ) : (
                            projectsData.mobile.map((app, index) => (
                                <MobileProjectCard key={app.id} app={app} index={index} iconMap={iconMap} />
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
