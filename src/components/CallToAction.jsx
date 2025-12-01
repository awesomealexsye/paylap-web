import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden border-white/10">
                    {/* Background Blobs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                            Ready to <span className="gradient-text">Transform</span> Your Business?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Let's collaborate to build something extraordinary. Whether you need a new website, a complex web app, or a digital transformation strategy, we're here to help.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
