import React, { useState, useEffect, useRef } from 'react';
import teamData from '../data/team.json';

const TeamCarousel = ({ onMemberClick, isPaused }) => {
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef(null);
    const requestRef = useRef();

    // Physics & Drag State
    const isDragging = useRef(false);
    const startX = useRef(0);
    const lastX = useRef(0);
    const velocity = useRef(0);
    const rotationRef = useRef(0); // Keep track of rotation without dependency on state
    const defaultSpeed = -0.05; // Normal auto-rotation speed

    const cardWidth = 400; // Width of card
    const gap = 40; // Gap between cards
    const count = teamData.team.length;

    // Calculate radius to form a perfect circle
    // Circumference = count * (cardWidth + gap)
    // Radius = Circumference / (2 * PI)
    const radius = Math.round((count * (cardWidth + gap)) / (2 * Math.PI));

    // Handle Drag Start
    const handleMouseDown = (e) => {
        if (isPaused) return;
        isDragging.current = true;
        startX.current = e.clientX;
        lastX.current = e.clientX;
        velocity.current = 0;
        // Prevent default to avoid text selection etc
        // e.preventDefault(); 
    };

    // Handle Drag Move
    const handleMouseMove = (e) => {
        if (!isDragging.current || isPaused) return;

        const clientX = e.clientX;
        const deltaX = clientX - lastX.current;

        // Update velocity based on movement
        // Sensitivity factor 0.2
        velocity.current = deltaX * 0.2;

        // Apply immediate rotation
        rotationRef.current += velocity.current;
        setRotation(rotationRef.current);

        lastX.current = clientX;
    };

    // Handle Drag End
    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const animate = () => {
        if (!isPaused) {
            if (!isDragging.current) {
                // Apply inertia and return to normal speed
                // Smoothly interpolate velocity towards defaultSpeed
                velocity.current = velocity.current * 0.95 + defaultSpeed * 0.05;

                rotationRef.current += velocity.current;
                setRotation(rotationRef.current);
            }
        } else {
            // If paused, kill velocity so it doesn't jump when unpaused
            velocity.current = 0;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isPaused]); // Re-bind if pause state changes, though logic handles it inside

    return (
        <div
            className="w-full h-[900px] flex items-center justify-center relative overflow-hidden perspective-[2000px] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div
                className="relative w-full h-full flex items-center justify-center transform-style-3d will-change-transform"
                style={{
                    transform: `rotateY(${rotation}deg)`,
                    transformStyle: 'preserve-3d'
                }}
            >
                {teamData.team.map((member, index) => {
                    const angle = (index / count) * 360;

                    return (
                        <div
                            key={index}
                            onClick={(e) => {
                                // Prevent click if we were dragging
                                if (Math.abs(velocity.current) > 0.5) return;
                                e.stopPropagation();
                                onMemberClick(member);
                            }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden'
                            }}
                        >
                            <div className="w-[400px] h-[500px] glass-card relative overflow-hidden pt-0 p-0 flex flex-col items-center transition-all duration-300 border border-white/20 shadow-[0_0_50px_rgba(79,70,229,0.3)] hover:shadow-[0_0_80px_rgba(79,70,229,0.6)] backdrop-blur-2xl bg-dark/80 hover:scale-105 hover:-translate-y-2">
                                {/* Animated Gradient Banner */}
                                <div className={`w-full h-40 bg-gradient-to-r ${member.color} opacity-90 group-hover:opacity-100 transition-all duration-700 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark/80 to-transparent" />
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamCarousel;
