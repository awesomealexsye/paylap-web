import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Nebula = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group rotation={[0, 0, Math.PI / 3]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Violet/Purple
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const Planet = ({ position, color, size, speed }) => {
    const mesh = useRef();

    useFrame((state, delta) => {
        mesh.current.rotation.y += delta * speed;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-dark">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <StarField />
                <Nebula />

                {/* Distant Planets */}
                <Planet position={[-1, 0.5, -2]} color="#3b82f6" size={0.2} speed={0.5} /> {/* Blue Tech Planet */}
                <Planet position={[1.2, -0.8, -1.5]} color="#ec4899" size={0.15} speed={0.3} /> {/* Pink Creative Planet */}
                <Planet position={[0.5, 1, -3]} color="#10b981" size={0.1} speed={0.7} /> {/* Green Growth Planet */}
            </Canvas>
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark/90" />
        </div>
    );
};

export default Background3D;
