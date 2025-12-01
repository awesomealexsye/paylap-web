import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import servicesData from '../data/services.json';

const Services = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to elevate your business in the digital age.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicesData.services.map((service) => {
                        const IconComponent = Icons[service.icon] || Icons.Code;
                        return (
                            <motion.div
                                key={service.id}
                                variants={item}
                                className="glass-card p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <IconComponent className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
