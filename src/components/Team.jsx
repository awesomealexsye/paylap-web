import React, { useState } from 'react';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';
import TeamCarousel from './TeamCarousel';
import Modal, { TeamModalContent } from './Modal';

// Starfield component
const Starfield = ({ count = 80 }) => {
    const stars = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
};

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <section id="team" className="py-40 relative overflow-hidden bg-gradient-to-b from-dark via-purple-950/10 to-dark">
            {/* Galaxy Background */}
            <Starfield count={100} />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 2, 0],
                            y: [0, -60, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Animated Nebula */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 100, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Our Team ✦
                    </motion.span>
                    <motion.h2
                        className="text-6xl md:text-8xl font-bold font-heading mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                    >
                        Meet Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Rockstars
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        The creative minds and technical wizards behind Paylap's success. Each bringing unique expertise and passion to every project.
                    </motion.p>
                </motion.div>

                <div className="hidden lg:block">
                    <TeamCarousel onMemberClick={setSelectedMember} isPaused={!!selectedMember} />
                </div>

                {/* Enhanced Mobile Fallback (Grid) */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {teamData.team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                bounce: 0.4
                            }}
                            whileHover={{ y: -15, scale: 1.05 }}
                            onClick={() => setSelectedMember(member)}
                            className="group relative overflow-hidden pt-0 p-0 flex flex-col items-center cursor-pointer"
                        >
                            {/* Glowing border effect */}
                            <div className={`absolute -inset-[2px] bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-3xl`} />

                            {/* Card Container */}
                            <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 rounded-3xl overflow-hidden transition-all duration-500 w-full shadow-2xl shadow-purple-900/20 group-hover:shadow-purple-600/40">
                                {/* Animated Gradient Banner */}
                                <motion.div
                                    className={`w-full h-32 bg-gradient-to-r ${member.color} relative overflow-hidden`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/10"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.div>

                                {/* Avatar */}
                                <div className="relative -mt-16 mb-6 flex justify-center">
                                    <motion.div
                                        className="relative w-32 h-32 rounded-full p-1.5 bg-dark z-10"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", bounce: 0.5 }}
                                    >
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-full opacity-75 blur-md`} />
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark shadow-2xl">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="px-8 pb-10 text-center flex-1 flex flex-col w-full relative z-10">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                        {member.name}
                                    </h3>
                                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${member.color} bg-opacity-20 border-2 border-white/20 text-sm font-bold tracking-wider uppercase mb-6 text-white shadow-lg`}>
                                        {member.role}
                                    </div>
                                    <p className="text-gray-400 text-base leading-relaxed flex-1 group-hover:text-gray-200 transition-colors">
                                        {member.description}
                                    </p>

                                    {/* Hover line */}
                                    <div className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${member.color} mt-8 rounded-full transition-all duration-500 shadow-lg`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Member Modal */}
            <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
                <TeamModalContent member={selectedMember} />
            </Modal>
        </section>
    );
};

export default Team;
