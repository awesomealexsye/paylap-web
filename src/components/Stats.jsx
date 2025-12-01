import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Team Members', value: '10+' },
];

const Stats = () => {
    return (
        <section className="py-10 relative z-20 -mt-10">
            <div className="container mx-auto px-6">
                <div className="glass-card p-8 md:p-12 rounded-3xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                                    {stat.label}
                                </p>
                                {index !== stats.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
