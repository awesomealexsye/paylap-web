import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import companyData from '../data/companyInfo.json';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm text-gray-300 font-medium tracking-wide uppercase">Available for new projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tight">
                            We Build <br />
                            <span className="gradient-text">Digital Excellence</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            {companyData.company.description} From concept to code, we deliver high-performance solutions that scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
                            >
                                View Our Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Tech Stack Ticker */}
                        <div className="mt-16 pt-8 border-t border-white/5">
                            <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">Powered by modern tech</p>
                            <div className="flex gap-6 justify-center lg:justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <Code size={24} />
                                <Cpu size={24} />
                                <Globe size={24} />
                                {/* Add more icons or logos here */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Hero Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 glass-card p-8 rounded-3xl border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40" />

                            {/* Abstract UI Representation */}
                            <div className="space-y-4">
                                <div className="flex gap-4 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-20 rounded-xl bg-white/5" />
                                    <div className="h-20 rounded-xl bg-white/5" />
                                    <div className="h-20 rounded-xl bg-white/5" />
                                </div>
                                <div className="h-8 w-1/2 rounded-lg bg-blue-500/20" />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl"
                        >
                            <Cpu className="text-blue-400" size={32} />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-5 -left-5 glass-card p-4 rounded-2xl"
                        >
                            <Code className="text-purple-400" size={32} />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
