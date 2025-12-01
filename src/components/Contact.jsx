import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import contactData from '../data/contactInfo.json';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent! (Demo only)');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to start your project? Contact us today for a free consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl flex items-start space-x-4">
                            <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Phone</h3>
                                <p className="text-gray-300 mb-1">{contactData.contactInfo.phone}</p>
                                <p className="text-sm text-gray-500">{contactData.contactInfo.phoneNote}</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl flex items-start space-x-4">
                            <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <p className="text-gray-300 mb-1">{contactData.contactInfo.email}</p>
                                <p className="text-sm text-gray-500">{contactData.contactInfo.emailNote}</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl flex items-start space-x-4">
                            <div className="bg-pink-500/20 p-3 rounded-lg text-pink-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Office</h3>
                                <p className="text-gray-300 mb-1">{contactData.contactInfo.office}</p>
                                <p className="text-sm text-gray-500">{contactData.contactInfo.officeNote}</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl flex items-start space-x-4">
                            <div className="bg-green-500/20 p-3 rounded-lg text-green-400">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Support Hours</h3>
                                <p className="text-gray-300 mb-1">{contactData.contactInfo.supportHours}</p>
                                <p className="text-sm text-gray-500">{contactData.contactInfo.supportHoursNote}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
