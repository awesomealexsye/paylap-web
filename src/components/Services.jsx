import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import * as Icons from 'lucide-react';
import servicesData from '../data/services.json';

// Starfield Background Component (Reusable)
const Starfield = () => {
    const stars = Array.from({ length: 200 }, (_, i) => ({
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
            className="absolute h-[2px] w-[120px] bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ x: '0%', y: '0%', opacity: 0 }}
            animate={{
                x: ['0%', '100vw'],
                y: ['0%', '50vh'],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration: 2.5,
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 12 + 8,
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
    const particles = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 5)],
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
                        opacity: 0.4,
                    }}
                    animate={{
                        y: [0, -120, 0],
                        x: [0, 60, -60, 0],
                        scale: [1, 1.8, 1],
                        opacity: [0.4, 0.7, 0.4],
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

const ServiceCard = ({ service, index }) => {
    const IconComponent = Icons[service.icon] || Icons.Code;
    const [isHovered, setIsHovered] = useState(false);

    // Determine grid span based on index
    const isLarge = index === 0 || index === 3;
    const gridClass = isLarge ? 'md:col-span-2' : 'md:col-span-1';

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
            }}
            whileHover={{ scale: 1.02, y: -8 }}
            className={`relative group rounded-[3rem] overflow-hidden ${gridClass} min-h-[380px]`}
        >
            {/* Glowing Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[3rem] opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />

            {/* Main Card Container */}
            <div className="relative h-full bg-dark/70 backdrop-blur-2xl border-2 border-white/10 hover:border-white/30 rounded-[3rem] transition-all duration-700 shadow-2xl shadow-purple-900/20 group-hover:shadow-purple-600/50">

                {/* Dynamic Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                {/* Animated Blob Background */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.5 : 1,
                        rotate: isHovered ? 180 : 0,
                        opacity: isHovered ? 0.5 : 0.3,
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${service.color} rounded-full blur-[120px]`}
                />

                {/* Sparkle Effect */}
                {isHovered && (
                    <motion.div
                        className="absolute top-6 right-6 z-30"
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        animate={{
                            opacity: 1,
                            rotate: 360,
                            scale: [1, 1.3, 1],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity },
                        }}
                    >
                        <Icons.Sparkles className="text-yellow-300" size={28} />
                    </motion.div>
                )}

                {/* Content Container */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <motion.div
                            className={`p-5 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 backdrop-blur-xl shadow-2xl ${service.shadow}`}
                            whileHover={{ scale: 1.2, rotate: 12 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            {service.lottie ? (
                                <Lottie
                                    animationData={null}
                                    src={service.lottie}
                                    className="w-10 h-10"
                                />
                            ) : (
                                <IconComponent className="text-white drop-shadow-lg" size={40} />
                            )}
                        </motion.div>

                        <motion.div
                            animate={{ rotate: isHovered ? 90 : 0 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 backdrop-blur-xl shadow-lg"
                        >
                            <Icons.ArrowUpRight size={24} />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-10">
                        <motion.h3
                            className="text-4xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500"
                            animate={{ x: isHovered ? 8 : 0 }}
                        >
                            {service.title}
                        </motion.h3>
                        <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                            {service.description}
                        </p>
                    </div>

                    {/* Hover Reveal Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? '100%' : '0%' }}
                        className={`h-1.5 bg-gradient-to-r ${service.color} mt-8 rounded-full shadow-lg`}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-40 relative bg-gradient-to-b from-dark via-blue-950/10 to-dark overflow-hidden">
            {/* Space Background Elements */}
            <Starfield />
            <FloatingParticles />

            {/* Shooting Stars */}
            {[0, 4, 8, 12].map((delay) => (
                <ShootingStar key={delay} delay={delay} />
            ))}

            {/* Nebula Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-blue-600/20 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute top-[20%] right-[-15%] w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.25, 0.6, 0.25],
                        x: [0, -100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        delay: 3,
                    }}
                />
                <motion.div
                    className="absolute bottom-[-20%] left-[15%] w-[800px] h-[800px] bg-pink-600/15 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.15, 0.4, 0.15],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        delay: 6,
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                        >
                            ✦ Our Services ✦
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                            className="text-6xl md:text-8xl font-bold font-heading text-white leading-tight mb-6"
                        >
                            We Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                                Digital Universes
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-xl max-w-xl leading-relaxed"
                    >
                        From concept to cosmos, we deliver cutting-edge solutions that transform businesses and launch brands into the stratosphere.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
