import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-dark/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            {children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export const TeamModalContent = ({ member }) => {
    if (!member) return null;

    return (
        <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 relative h-64 md:h-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`} />
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className={`inline-block self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase mb-4 text-blue-300`}>
                    {member.role}
                </div>

                <h3 className="text-3xl font-bold mb-2 text-white">{member.name}</h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                    {member.description}
                    <br /><br />
                    Passionate about building scalable solutions and driving technical innovation. Dedicated to creating exceptional user experiences through clean code and modern design patterns.
                </p>
            </div>
        </div>
    );
};

export default Modal;
