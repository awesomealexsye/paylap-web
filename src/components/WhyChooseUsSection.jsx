import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Lightbulb, Headphones } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and security protocols to protect your data',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized performance that loads in milliseconds, not seconds',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: '50+ certified professionals with decades of combined experience',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Award,
        title: 'Award Winning',
        description: 'Recognized globally for innovation and excellence in development',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'Always ahead with the latest technologies and best practices',
        color: 'from-pink-500 to-red-500',
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Round-the-clock assistance whenever you need it',
        color: 'from-cyan-500 to-blue-500',
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-40 relative bg-gradient-to-b from-dark via-purple-950/10 to-dark overflow-hidden">
            {/* Starfield effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(60)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 2, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Glowing orb */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Why Choose Us ✦
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="text-6xl md:text-8xl font-bold font-heading text-white mb-6"
                    >
                        Built for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                            Excellence
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-2xl max-w-4xl mx-auto leading-relaxed"
                    >
                        We don't just build software — we craft experiences that transform businesses and delight users
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: 0.8
                                }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.05,
                                    rotateY: 5
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="group relative"
                            >
                                {/* Mega glow effect */}
                                <motion.div
                                    className={`absolute -inset-3 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700`}
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Card */}
                                <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:border-white/40 min-h-[280px] flex flex-col">
                                    {/* Floating icon */}
                                    <motion.div
                                        className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-8 shadow-2xl`}
                                        whileHover={{
                                            rotate: [0, -15, 15, -15, 0],
                                            scale: 1.2,
                                            y: -10
                                        }}
                                        transition={{ duration: 0.6 }}
                                        style={{
                                            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)'
                                        }}
                                    >
                                        <Icon size={48} className="text-white drop-shadow-lg" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                                        {benefit.description}
                                    </p>

                                    {/* Animated accent line */}
                                    <motion.div
                                        className={`h-2 w-0 group-hover:w-full bg-gradient-to-r ${benefit.color} mt-auto pt-6 rounded-full transition-all duration-500 shadow-lg`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
