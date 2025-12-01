import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Background3D from '../components/Background3D';

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <Background3D />
            <div className="relative z-10">
                <Hero />
                <Stats />
                <Features />
                <CallToAction />
            </div>
        </div>
    );
};

export default Home;
