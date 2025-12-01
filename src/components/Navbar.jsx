import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import companyData from '../data/companyInfo.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                className={`transition-all duration-300 ${scrolled || isOpen ? 'glass-nav mt-4' : 'bg-transparent py-6 mt-0 border-transparent shadow-none'
                    } flex justify-between items-center max-w-6xl mx-auto rounded-full`}
            >
                <Link to="/" className="flex items-center gap-2 pl-2">
                    <img src="/src/assets/paylap.png" alt={companyData.company.name} className="h-8 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${isActive
                                    ? 'text-white bg-white/10 shadow-inner'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 rounded-full border border-white/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="md:hidden absolute top-20 left-4 right-4 glass-card overflow-hidden z-40"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`p-4 rounded-xl text-center transition-colors ${location.pathname === link.href
                                        ? 'bg-blue-600/20 text-blue-400 font-bold'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
