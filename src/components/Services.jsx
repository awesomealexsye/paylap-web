import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import servicesData from '../data/services.json';

const Services = () => {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Our <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We deliver comprehensive IT solutions tailored to elevate your business in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {servicesData.services.map((service, index) => {
                        const IconComponent = Icons[service.icon] || Icons.Code;
                        // Make some cards span larger areas for "Bento" look
                        const isLarge = index === 0 || index === 3;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass-card p-8 group relative overflow-hidden ${isLarge ? 'md:col-span-2' : ''}`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                    <IconComponent size={120} />
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-colors">
                                            <IconComponent className="text-blue-400 group-hover:text-blue-300" size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed max-w-md">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Learn more <Icons.ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
