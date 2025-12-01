import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Zap, Shield } from 'lucide-react';

// Tech icon mapping
const techIcons = {
    Code, Database, Cloud, Smartphone, Zap, Shield
};

const technologies = [
    {
        icon: 'Code',
        name: 'Frontend',
        description: 'React, Vue, Next.js',
        color: 'from-blue-500 to-cyan-500',
        delay: 0
    },
    {
        icon: 'Database',
        name: 'Backend',
        description: 'Node.js, Python, Go',
        color: 'from-purple-500 to-pink-500',
        delay: 0.1
    },
    {
        icon: 'Cloud',
        name: 'Cloud',
        description: 'AWS, Azure, GCP',
        color: 'from-cyan-500 to-blue-500',
        delay: 0.2
    },
    {
        icon: 'Smartphone',
        name: 'Mobile',
        description: 'React Native, Flutter',
        color: 'from-pink-500 to-red-500',
        delay: 0.3
    },
    {
        icon: 'Zap',
        name: 'Performance',
        description: 'Optimized & Fast',
        color: 'from-yellow-500 to-orange-500',
        delay: 0.4
    },
    {
        icon: 'Shield',
        name: 'Security',
        description: 'Enterprise-grade',
        color: 'from-green-500 to-emerald-500',
        delay: 0.5
    },
];

const TechnologyShowcase = () => {
    return (
        <section className="py-32 relative bg-gradient-to-b from-dark via-purple-950/10 to-dark overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Nebula effects */}
            <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Our Expertise ✦
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white mb-6"
                    >
                        Technology{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Arsenal
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-xl max-w-3xl mx-auto"
                    >
                        We leverage the most advanced technologies to build solutions that are fast, scalable, and future-proof
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => {
                        const Icon = techIcons[tech.icon];
                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: tech.delay,
                                    type: "spring",
                                    bounce: 0.4
                                }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group relative"
                            >
                                {/* Glowing border */}
                                <div className={`absolute -inset-[1px] bg-gradient-to-r ${tech.color} rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500`} />

                                {/* Card */}
                                <div className="relative bg-dark/80 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:border-white/30">
                                    {/* Icon */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 shadow-2xl`}
                                        whileHover={{ rotate: 12, scale: 1.1 }}
                                        transition={{ type: "spring", bounce: 0.6 }}
                                    >
                                        <Icon size={32} className="text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {tech.name}
                                    </h3>
                                    <p className="text-gray-400 text-base group-hover:text-gray-300 transition-colors">
                                        {tech.description}
                                    </p>

                                    {/* Hover line */}
                                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${tech.color} mt-6 rounded-full transition-all duration-300`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechnologyShowcase;
