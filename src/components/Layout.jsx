import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-purple-500 selection:text-white">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
