import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
    {
        icon: Target,
        title: 'Discovery',
        description: 'We dive deep into your vision, goals, and requirements to craft the perfect roadmap',
        color: 'from-blue-500 to-cyan-500',
        delay: 0
    },
    {
        icon: Zap,
        title: 'Design',
        description: 'Our designers create stunning, user-centric interfaces that captivate and engage',
        color: 'from-purple-500 to-pink-500',
        delay: 0.2
    },
    {
        icon: Rocket,
        title: 'Development',
        description: 'Expert engineers build robust, scalable solutions using cutting-edge technologies',
        color: 'from-orange-500 to-red-500',
        delay: 0.4
    },
    {
        icon: CheckCircle2,
        title: 'Launch',
        description: 'We deploy your solution and provide ongoing support to ensure continued success',
        color: 'from-green-500 to-emerald-500',
        delay: 0.6
    },
];

const ProcessSection = () => {
    return (
        <section className="py-40 relative bg-gradient-to-b from-dark via-blue-950/5 to-dark overflow-hidden">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 2, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            {/* Animated nebula */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 20, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Our Process ✦
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="text-6xl md:text-8xl font-bold font-heading text-white mb-6"
                    >
                        From Idea to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Reality
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-2xl max-w-3xl mx-auto"
                    >
                        Our proven methodology transforms your vision into exceptional digital experiences
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: step.delay,
                                        type: "spring",
                                        bounce: 0.4
                                    }}
                                    whileHover={{ y: -15, scale: 1.05 }}
                                    className="group relative"
                                >
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border-2 border-white/20 flex items-center justify-center text-white font-bold text-xl z-20">
                                        {index + 1}
                                    </div>

                                    {/* Glowing border */}
                                    <div className={`absolute -inset-[2px] bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />

                                    {/* Card */}
                                    <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-8 transition-all duration-500 group-hover:border-white/30 min-h-[320px] flex flex-col">
                                        {/* Icon */}
                                        <motion.div
                                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-2xl mx-auto`}
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon size={40} className="text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-base text-center leading-relaxed group-hover:text-gray-300 transition-colors flex-1">
                                            {step.description}
                                        </p>

                                        {/* Arrow for next step */}
                                        {index < processSteps.length - 1 && (
                                            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-30">
                                                <motion.div
                                                    animate={{ x: [0, 10, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <ArrowRight size={32} className="text-purple-500" />
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
