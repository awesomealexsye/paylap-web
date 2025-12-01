import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

const stats = [
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Team Members', value: 10, suffix: '+' },
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-10 relative z-20 -mt-10">
            <div className="container mx-auto px-6">
                <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] transition-shadow duration-500">
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2 flex justify-center items-center">
                                    <Counter value={stat.value} suffix={stat.suffix} />
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
