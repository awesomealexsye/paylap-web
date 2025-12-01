import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background3D from './Background3D';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-purple-500 selection:text-white relative">
            <Background3D />
            <div className="relative z-10">
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
