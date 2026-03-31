import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Octahedron, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ReactorCore = () => {
  const groupRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Independent rotations for each layer
    if (innerRef.current) {
      innerRef.current.rotation.y = time * 0.5;
      innerRef.current.rotation.z = time * 0.3;
    }
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.2;
      ring1Ref.current.rotation.y = time * 0.4;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = time * 0.3;
      ring2Ref.current.rotation.x = time * 0.1;
    }
    
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.1;
      ring3Ref.current.rotation.z = time * 0.2;
    }

    // Subtle global parallax tilting based on mouse position
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef} position={[3, 0, -2]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Inner Glowing Core */}
        <Octahedron ref={innerRef} args={[1, 0]}>
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981" 
            emissiveIntensity={2} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </Octahedron>

        {/* Tech Ring 1 */}
        <Torus ref={ring1Ref} args={[2.0, 0.02, 16, 100]}>
          <meshStandardMaterial color="#334155" metalness={1} roughness={0.1} />
        </Torus>

        {/* Tech Ring 2 */}
        <Torus ref={ring2Ref} args={[2.5, 0.015, 16, 100]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} metalness={1} roughness={0.1} />
        </Torus>

        {/* Tech Ring 3 (Outer Frame) */}
        <Torus ref={ring3Ref} args={[3.0, 0.01, 16, 100]}>
          <meshStandardMaterial color="#475569" metalness={1} roughness={0.1} />
        </Torus>

        {/* Orbiting Nodes */}
        {[0, 1, 2].map((i) => (
          <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <Sphere position={[3.5, 0, 0]} args={[0.1, 16, 16]}>
              <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
            </Sphere>
          </group>
        ))}
      </Float>
    </group>
  );
};

const FloatingShape = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[5] pointer-events-none">
      <div className="w-full h-full pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Environment preset="city" />
          <ReactorCore />
        </Canvas>
      </div>
    </div>
  );
};

export default FloatingShape;
