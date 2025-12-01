import React from 'react';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';

const Team = () => {
    return (
        <section id="team" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Meet Our <span className="gradient-text">Team</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The creative minds and technical experts behind Paylap.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamData.team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl text-center group hover:border-blue-500/30 transition-colors"
                        >
                            <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.color} p-1`}>
                                <div className="w-full h-full rounded-full bg-dark overflow-hidden flex items-center justify-center">
                                    {/* Placeholder for avatar */}
                                    <span className="text-2xl font-bold text-white">
                                        {member.name.charAt(0)}
                                    </span>
                                    {/* <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> */}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
