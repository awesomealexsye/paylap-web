import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../data/companyInfo.json';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/lottie/hero-tech.json';

// Floating orb component
const FloatingOrb = ({ delay, duration, size, color, position }) => (
    <motion.div
        className={`absolute rounded-full blur-xl ${color} opacity-30`}
        style={{
            width: size,
            height: size,
            ...position
        }}
        animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
        }}
    />
);

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-32">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Nebula Blobs */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] bg-cyan-600/15 rounded-full blur-[150px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 15, repeat: Infinity, delay: 4 }}
                />

                {/* Floating Orbs */}
                <FloatingOrb delay={0} duration={8} size="100px" color="bg-blue-500" position={{ top: '20%', left: '10%' }} />
                <FloatingOrb delay={2} duration={10} size="80px" color="bg-purple-500" position={{ top: '60%', right: '15%' }} />
                <FloatingOrb delay={4} duration={12} size="120px" color="bg-pink-500" position={{ bottom: '30%', left: '60%' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        {/* Status Badge */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-2 border-white/10 mb-8 backdrop-blur-xl shadow-lg shadow-blue-600/20"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                            </motion.div>
                            <span className="text-sm text-white font-bold tracking-wide uppercase flex items-center gap-2">
                                <Zap size={16} className="text-yellow-300" />
                                Available for new projects
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold font-heading mb-8 leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            We Craft <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x inline-flex items-center gap-4">
                                Digital Magic
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="text-yellow-300" size={48} />
                                </motion.div>
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {companyData.company.description} From concept to cosmos, we launch high-performance solutions that scale beyond imagination.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/projects">
                                <motion.div
                                    className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-600/50 flex items-center justify-center gap-3 relative overflow-hidden cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                                        initial={{ x: "100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10 flex items-center gap-3">
                                        <Rocket size={22} />
                                        View Our Work
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </motion.div>
                            </Link>

                            <Link to="/contact">
                                <motion.div
                                    className="px-10 py-5 bg-white/5 hover:bg-white/10 border-2 border-white/20 text-white rounded-full font-bold text-lg transition-all backdrop-blur-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Star size={22} />
                                    Start a Project
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Tech Stack Showcase */}
                        <motion.div
                            className="mt-20 pt-10 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="text-sm text-gray-500 mb-6 font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
                                <Sparkles size={16} />
                                Powered by cutting-edge technology
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + i * 0.1, type: "spring", bounce: 0.5 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Lottie Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={handleMouseLeave}
                        className="lg:w-1/2 relative flex items-center justify-center"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Glowing ring behind Lottie */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[100px] scale-110 animate-pulse" />

                        {/* Main Lottie Container with 3D tilt */}
                        <motion.div
                            className="w-full relative"
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        >
                            {/* Floating sparkles around Lottie */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-white rounded-full"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        scale: [0, 1.5, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}

                            <Lottie
                                animationData={heroAnimation}
                                loop={true}
                                className="w-full h-auto drop-shadow-2xl"
                                style={{ filter: `drop-shadow(0 0 40px rgba(147, 51, 234, ${isHovered ? 0.6 : 0.3}))` }}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
