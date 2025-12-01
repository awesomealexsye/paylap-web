import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Environment, OrbitControls, Stars, Sparkles } from '@react-three/drei';
import teamData from '../data/team.json';
import * as THREE from 'three';

const TeamCard3D = ({ member, position, rotation, onClick }) => {
    return (
        <group position={position} rotation={rotation}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
                <Html transform occlude distanceFactor={2.5} style={{ pointerEvents: 'auto' }}>
                    <div
                        onClick={() => onClick(member)}
                        className="w-[400px] h-[500px] glass-card group relative overflow-hidden pt-0 p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-white/20 shadow-[0_0_50px_rgba(79,70,229,0.3)] hover:shadow-[0_0_80px_rgba(79,70,229,0.6)] backdrop-blur-2xl bg-dark/60 cursor-pointer"
                    >
                        {/* Animated Gradient Banner */}
                        <div className={`w-full h-40 bg-gradient-to-r ${member.color} opacity-90 group-hover:opacity-100 transition-all duration-700 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark/60 to-transparent" />
                        </div>

                        {/* Avatar */}
                        <div className="relative -mt-20 mb-6">
                            <div className="relative w-40 h-40 rounded-full p-1 bg-dark z-10 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-dark group-hover:border-blue-500/50 transition-colors duration-300">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-dark rounded-full z-20 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                        </div>

                        {/* Content */}
                        <div className="px-10 pb-12 text-center flex-1 flex flex-col w-full">
                            <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">{member.name}</h3>
                            <div className="text-sm font-bold tracking-wider uppercase mb-6 text-blue-300 drop-shadow-md">
                                {member.role}
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed opacity-90 line-clamp-4 font-medium">
                                {member.description}
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/10 w-full">
                                <span className="text-sm text-blue-400 font-bold group-hover:text-blue-300 transition-colors uppercase tracking-widest">View Profile</span>
                            </div>
                        </div>
                    </div>
                </Html>
            </Float>
        </group>
    );
};

const TeamScene = ({ onMemberClick }) => {
    const radius = 4.5; // Slightly increased radius for larger cards
    const count = teamData.team.length;

    return (
        <group position={[0, -0.5, 0]}>
            {teamData.team.map((member, index) => {
                // Calculate position on the cylinder
                const angle = (index / count) * Math.PI * 2;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;

                // Calculate rotation to face outward
                const rotY = angle;

                return (
                    <TeamCard3D
                        key={index}
                        member={member}
                        position={[x, 0, z]}
                        rotation={[0, rotY, 0]}
                        onClick={onMemberClick}
                    />
                );
            })}
        </group>
    );
};

const Team3DCarousel = ({ onMemberClick, isPaused }) => {
    return (
        <div className="w-full h-[900px] relative">
            <Canvas camera={{ position: [0, 2, 14], fov: 40 }}>
                <color attach="background" args={['#020205']} />
                <fog attach="fog" args={['#020205', 10, 40]} />

                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
                <Environment preset="city" />

                <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={200} scale={15} size={3} speed={0.4} opacity={0.6} color="#4f46e5" />

                <TeamScene onMemberClick={onMemberClick} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={!isPaused}
                    autoRotateSpeed={0.6}
                    minPolarAngle={Math.PI / 2 - 0.1}
                    maxPolarAngle={Math.PI / 2 + 0.1}
                />
            </Canvas>
        </div>
    );
};

export default Team3DCarousel;
