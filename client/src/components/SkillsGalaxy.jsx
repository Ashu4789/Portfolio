import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, OrbitControls, Text, Stars, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BoxSelect, Maximize } from 'lucide-react';

const SkillNode = ({ name, position, color, icon }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y += Math.sin(time + position[0]) * 0.002;
    meshRef.current.rotation.x = Math.cos(time * 0.5) * 0.2;
    meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshDistortMaterial
            color={hovered ? '#10b981' : color}
            speed={4}
            distort={0.3}
            radius={1}
          />
        </mesh>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>

        {hovered && (
          <pointLight intensity={1} color="#10b981" distance={5} />
        )}
      </Float>
    </group>
  );
};

const Galaxy = ({ skills }) => {
  const flattenedSkills = useMemo(() => {
    return skills.flatMap((group, gIdx) => 
      group.items.map((item, iIdx) => ({
        ...item,
        color: gIdx === 0 ? '#3b82f6' : gIdx === 1 ? '#10b981' : gIdx === 2 ? '#f59e0b' : '#ef4444',
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5
        ]
      }))
    );
  }, [skills]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Central Core */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#064e3b"
            emissiveIntensity={0.5}
          />
        </mesh>
        <Text
          position={[0, 0, 1.3]}
          fontSize={0.4}
          color="white"
        >
          CORE
        </Text>
      </Float>

      {flattenedSkills.map((skill, idx) => (
        <SkillNode key={idx} {...skill} />
      ))}

      <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      <OrbitControls enableZoom={false} makeDefault autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const SkillsGalaxy = ({ skills, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[550] bg-slate-950/90 backdrop-blur-xl flex flex-col"
    >
      {/* Header controls */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-[560]">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <BoxSelect className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-bold text-white tracking-widest uppercase">Interactive Galaxy</h2>
            <p className="text-[10px] text-emerald-400 font-mono">DRAG TO ROTATE • HOVER TO INSPECT • ESC TO EXIT</p>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="group flex items-center gap-2 bg-white/10 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-bold border border-white/5 shadow-2xl"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          TERMINATE SIMULATION
        </button>
      </div>

      <div className="flex-1 w-full h-full relative cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
          <color attach="background" args={['#020617']} />
          
          <Suspense fallback={null}>
            <Galaxy skills={skills} />
          </Suspense>
        </Canvas>
      </div>

      {/* Decorative footer */}
      <div className="absolute bottom-0 w-full p-6 flex justify-center pointer-events-none">
        <div className="bg-slate-900/60 border border-white/5 backdrop-blur px-8 py-3 rounded-full flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Languages</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Frameworks</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span> Tools</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Soft Skills</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsGalaxy;
