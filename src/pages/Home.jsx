import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import TechnologyShowcase from '../components/TechnologyShowcase';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CallToAction from '../components/CallToAction';

// Enhanced Starfield component with more stars
const Starfield = () => {
    const stars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
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
                        opacity: [0.1, 1, 0.1],
                        scale: [1, 1.8, 1],
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

// Shooting Star
const ShootingStar = ({ delay }) => (
    <motion.div
        className="absolute h-[2px] w-[120px] bg-gradient-to-r from-transparent via-white to-transparent"
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
            repeatDelay: Math.random() * 15 + 8,
        }}
        style={{
            left: `${Math.random() * 50}%`,
            top: `${Math.random() * 30}%`,
            transform: 'rotate(-45deg)',
        }}
    />
);

// Cosmic Dust Particles
const CosmicDust = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 5)],
        duration: Math.random() * 25 + 20,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full blur-md"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: particle.color,
                        opacity: 0.4,
                    }}
                    animate={{
                        y: [0, -150, 0],
                        x: [0, 80, -80, 0],
                        scale: [1, 2, 1],
                        opacity: [0.4, 0.8, 0.4],
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

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const y3 = useTransform(scrollY, [500, 1000], [0, 100]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Enhanced Galaxy Background */}
            <Starfield />
            <CosmicDust />

            {/* Multiple Shooting Stars */}
            {[0, 3, 6, 9, 12].map((delay) => (
                <ShootingStar key={delay} delay={delay} />
            ))}

            {/* Massive Floating Nebula Elements with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-40 right-10 w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-[160px]"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.15, 0.3, 0.15],
                    rotate: [0, -90, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            />
            <motion.div
                style={{ y: y3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-500/10 rounded-full blur-[180px]"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 18, repeat: Infinity, delay: 4 }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                {/* Hero Section */}
                <Hero />

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Stats />
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Features />
                </motion.div>

                {/* Technology Showcase Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <TechnologyShowcase />
                </motion.div>

                {/* NEW: Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <ProcessSection />
                </motion.div>

                {/* NEW: Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <WhyChooseUsSection />
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <CallToAction />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
