import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import companyData from '../data/companyInfo.json';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/lottie/hero-tech.json';

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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative flex items-center justify-center"
                    >
                        <div className="w-full max-w-lg">
                            <Lottie
                                animationData={heroAnimation}
                                loop={true}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
