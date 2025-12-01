import React from 'react';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';

const Team = () => {
    return (
        <section id="team" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Meet Our <span className="gradient-text">Team</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The creative minds and technical experts behind Paylap's success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamData.team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                            className="glass-card group relative overflow-hidden pt-0 p-0 flex flex-col items-center perspective-1000"
                        >
                            {/* Animated Gradient Banner */}
                            <div className={`w-full h-28 bg-gradient-to-r ${member.color} opacity-80 group-hover:opacity-100 transition-all duration-700 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                            </div>

                            {/* Avatar with Pulsing Ring */}
                            <div className="relative -mt-14 mb-6">
                                <div className="relative w-28 h-28 rounded-full p-1 bg-dark z-10">
                                    <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-dark">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                {/* Pulsing Glow Effect */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} blur-md opacity-40 group-hover:opacity-80 animate-pulse transition-opacity duration-500 z-0`} />

                                {/* Status Indicator */}
                                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-dark rounded-full z-20 shadow-lg" title="Online" />
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-10 text-center flex-1 flex flex-col w-full relative z-10">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{member.name}</h3>
                                <div className={`inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase mb-5 text-gray-300 group-hover:border-white/20 transition-colors`}>
                                    {member.role}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed flex-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {member.description}
                                </p>
                            </div>

                            {/* Bottom Glow Bar */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
