import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../data/companyInfo.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold font-heading gradient-text">
                    {companyData.company.name}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-nav overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
