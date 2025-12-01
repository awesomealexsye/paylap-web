import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Sparkles, MessageCircle } from 'lucide-react';
import contactData from '../data/contactInfo.json';

// Starfield component
const Starfield = () => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
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

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isFocused, setIsFocused] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/918510075444?text=${text}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setIsFocused({ ...isFocused, [field]: true });
    };

    const handleBlur = (field) => {
        setIsFocused({ ...isFocused, [field]: false });
    };

    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-gradient-to-b from-dark via-blue-950/10 to-dark">
            {/* Galaxy Background */}
            <Starfield />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: ['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)],
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 2.5, 0],
                            y: [0, -70, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            {/* Animated Nebulas */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [-50, 50, -50],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    y: [-50, 50, -50],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        ✦ Contact Us ✦
                    </motion.span>
                    <motion.h2
                        className="text-6xl md:text-8xl font-bold font-heading mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                    >
                        Let's Build{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-flex items-center gap-4">
                            Together
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="text-yellow-300" size={56} />
                            </motion.div>
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Ready to start your project? Contact us today for a free consultation and let's create something amazing together.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Phone Card */}
                        <motion.a
                            href={`tel:${contactData.contactInfo.phone.replace(/\s/g, '')}`}
                            className="group relative block"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                        >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                            <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 p-8 rounded-3xl flex items-start space-x-6 transition-all duration-500 shadow-2xl shadow-blue-900/20 group-hover:shadow-blue-600/40">
                                <motion.div
                                    className="bg-gradient-to-br from-blue-500 to-cyan-500 p-5 rounded-2xl text-white shadow-2xl"
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <Phone size={32} />
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Phone</h3>
                                    <p className="text-gray-300 mb-2 text-lg font-semibold group-hover:text-blue-400 transition-colors">{contactData.contactInfo.phone}</p>
                                    <p className="text-sm text-gray-500">{contactData.contactInfo.phoneNote}</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Email Card */}
                        <motion.a
                            href={`mailto:${contactData.contactInfo.email}`}
                            className="group relative block"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                        >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                            <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 p-8 rounded-3xl flex items-start space-x-6 transition-all duration-500 shadow-2xl shadow-purple-900/20 group-hover:shadow-purple-600/40">
                                <motion.div
                                    className="bg-gradient-to-br from-purple-500 to-pink-500 p-5 rounded-2xl text-white shadow-2xl"
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <Mail size={32} />
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Email</h3>
                                    <p className="text-gray-300 mb-2 text-lg font-semibold group-hover:text-purple-400 transition-colors">{contactData.contactInfo.email}</p>
                                    <p className="text-sm text-gray-500">{contactData.contactInfo.emailNote}</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Office Card */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                        >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                            <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 p-8 rounded-3xl flex items-start space-x-6 transition-all duration-500 shadow-2xl shadow-pink-900/20 group-hover:shadow-pink-600/40">
                                <motion.div
                                    className="bg-gradient-to-br from-pink-500 to-orange-500 p-5 rounded-2xl text-white shadow-2xl"
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", bounce: 0.5 }}
                                >
                                    <MapPin size={32} />
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Office</h3>
                                    <p className="text-gray-300 mb-2 text-lg font-semibold">{contactData.contactInfo.office}</p>
                                    <p className="text-sm text-gray-500">{contactData.contactInfo.officeNote}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Enhanced Google Maps Embed */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
                            <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 p-3 rounded-3xl overflow-hidden h-80 transition-all duration-500 shadow-2xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562098679584!2d77.02677537616694!3d28.61291197567543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x8f7c6e75616335!2sKakrola%20Housing%20Complex!5e0!3m2!1sen!2sin!4v1701421234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />

                        <div className="relative bg-dark/90 backdrop-blur-2xl border-2 border-white/10 group-hover:border-white/30 p-10 rounded-3xl transition-all duration-500 shadow-2xl shadow-green-900/20 group-hover:shadow-green-600/40">
                            <div className="flex items-center gap-3 mb-8">
                                <MessageCircle size={32} className="text-green-400" />
                                <h3 className="text-3xl font-bold text-white">Send a Message</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Name</label>
                                    <motion.div
                                        animate={{
                                            scale: isFocused.name ? 1.02 : 1,
                                        }}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('name')}
                                            onBlur={() => handleBlur('name')}
                                            required
                                            className="w-full bg-white/5 border-2 border-white/10 focus:border-green-500 rounded-2xl px-6 py-4 text-white text-lg focus:outline-none transition-all backdrop-blur-xl shadow-inner"
                                            placeholder="Your Name"
                                        />
                                    </motion.div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Email</label>
                                    <motion.div
                                        animate={{
                                            scale: isFocused.email ? 1.02 : 1,
                                        }}
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('email')}
                                            onBlur={() => handleBlur('email')}
                                            required
                                            className="w-full bg-white/5 border-2 border-white/10 focus:border-green-500 rounded-2xl px-6 py-4 text-white text-lg focus:outline-none transition-all backdrop-blur-xl shadow-inner"
                                            placeholder="your@email.com"
                                        />
                                    </motion.div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Phone</label>
                                    <motion.div
                                        animate={{
                                            scale: isFocused.phone ? 1.02 : 1,
                                        }}
                                    >
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('phone')}
                                            onBlur={() => handleBlur('phone')}
                                            className="w-full bg-white/5 border-2 border-white/10 focus:border-green-500 rounded-2xl px-6 py-4 text-white text-lg focus:outline-none transition-all backdrop-blur-xl shadow-inner"
                                            placeholder="Your Phone Number"
                                        />
                                    </motion.div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Message</label>
                                    <motion.div
                                        animate={{
                                            scale: isFocused.message ? 1.02 : 1,
                                        }}
                                    >
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('message')}
                                            onBlur={() => handleBlur('message')}
                                            required
                                            rows="5"
                                            className="w-full bg-white/5 border-2 border-white/10 focus:border-green-500 rounded-2xl px-6 py-4 text-white text-lg focus:outline-none transition-all backdrop-blur-xl shadow-inner resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </motion.div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white font-bold py-5 rounded-2xl shadow-2xl shadow-green-500/50 flex items-center justify-center gap-3 text-lg relative overflow-hidden group/btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600"
                                        initial={{ x: "100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10 flex items-center gap-3">
                                        Send via WhatsApp
                                        <Send size={20} />
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
