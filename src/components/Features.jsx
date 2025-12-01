import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized performance for seamless user experiences and better SEO rankings.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
    },
    {
        icon: Shield,
        title: 'Secure by Design',
        description: 'Enterprise-grade security protocols to protect your data and your users.',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Solutions',
        description: 'Architecture that grows with your business, handling increased traffic effortlessly.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        icon: Users,
        title: 'Dedicated Support',
        description: '24/7 technical support and maintenance to ensure your digital presence never sleeps.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
    },
];

const Features = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Why Choose <span className="gradient-text">Paylap?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We combine technical expertise with creative innovation to deliver results that matter.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
