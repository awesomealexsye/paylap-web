import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import companyData from '../data/companyInfo.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Mouse tracking for glow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseMove={handleMouseMove}
                className={`relative transition-all duration-500 ${scrolled || isOpen
                    ? 'mt-4 bg-dark/40 backdrop-blur-2xl border-2 border-white/10 shadow-2xl shadow-purple-900/20'
                    : 'bg-transparent py-6 mt-0 border-transparent shadow-none'
                    } flex justify-between items-center max-w-7xl mx-auto rounded-full px-6 py-4 group`}
            >
                {/* Animated gradient border glow */}
                {scrolled && (
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
                )}

                {/* Mouse follower glow */}
                {scrolled && (
                    <motion.div
                        className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                            left: springX,
                            top: springY,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                )}

                <div className="relative z-10 flex items-center gap-2 pl-2">
                    <Link to="/" className="flex items-center gap-3 group/logo">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="relative"
                        >
                            <img
                                src="/paylap.png"
                                alt={companyData.company.name}
                                className="h-10 w-auto drop-shadow-lg"
                            />
                            {/* Sparkle effect on hover */}
                            <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ scale: 0, rotate: 0 }}
                                whileHover={{ scale: [0, 1, 0], rotate: 180 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Sparkles size={14} className="text-yellow-300" />
                            </motion.div>
                        </motion.div>

                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 relative z-10">
                    {navLinks.map((link, index) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                            >
                                <Link
                                    to={link.href}
                                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-pill"
                                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-600/50"
                                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>

                                    {/* Hover effect for non-active */}
                                    {!isActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* CTA Button */}
                    <Link to="/contact">
                        <motion.div
                            className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-purple-600/50 transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden relative z-10 text-white p-2.5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-xl border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-24 left-4 right-4 bg-dark/90 backdrop-blur-2xl border-2 border-white/10 rounded-3xl overflow-hidden z-40 shadow-2xl shadow-purple-900/20"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block p-4 rounded-xl text-center transition-all duration-300 ${location.pathname === link.href
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <Link to="/contact">
                                <motion.div
                                    onClick={() => setIsOpen(false)}
                                    className="block p-4 mt-2 rounded-xl text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                >
                                    Get Started
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
