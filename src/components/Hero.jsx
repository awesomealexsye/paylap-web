import React from 'react';
import { motion } from 'framer-motion';
import companyData from '../data/companyInfo.json';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4 tracking-wider uppercase">
                        {companyData.company.tagline}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Building the <br />
                        <span className="gradient-text">Digital Future</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        {companyData.company.description}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
                        >
                            View Our Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
