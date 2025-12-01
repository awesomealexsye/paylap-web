import React from 'react';
import companyData from '../data/companyInfo.json';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold font-heading mb-4">{companyData.company.name}</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    {companyData.company.tagline}
                </p>
                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} {companyData.company.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
