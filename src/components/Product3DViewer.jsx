import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, RoundedBox, Torus, Sphere, Cylinder } from '@react-three/drei';

function HeadphonesModel({ color }) {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
  });

  return (
    <group ref={group}>
      {/* Band */}
      <Torus args={[1.1, 0.06, 16, 60, Math.PI]} rotation={[0, 0, 0]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </Torus>
      {/* Left ear cup */}
      <group position={[-1.1, -0.85, 0]}>
        <Cylinder args={[0.38, 0.42, 0.22, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.25} />
        </Cylinder>
        <Cylinder args={[0.28, 0.28, 0.28, 32]} position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.2} roughness={0.8} />
        </Cylinder>
      </group>
      {/* Right ear cup */}
      <group position={[1.1, -0.85, 0]}>
        <Cylinder args={[0.38, 0.42, 0.22, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.25} />
        </Cylinder>
        <Cylinder args={[0.28, 0.28, 0.28, 32]} position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.2} roughness={0.8} />
        </Cylinder>
      </group>
      {/* Left arm */}
      <Cylinder args={[0.05, 0.05, 0.75, 16]} position={[-1.07, -0.28, 0]} rotation={[0, 0, -0.18]}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </Cylinder>
      {/* Right arm */}
      <Cylinder args={[0.05, 0.05, 0.75, 16]} position={[1.07, -0.28, 0]} rotation={[0, 0, 0.18]}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </Cylinder>
    </group>
  );
}

function WatchModel({ color }) {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    group.current.rotation.x = 0.1;
  });

  return (
    <group ref={group}>
      {/* Watch case */}
      <RoundedBox args={[1.2, 1.5, 0.25]} radius={0.18} smoothness={8}>
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.1} />
      </RoundedBox>
      {/* Screen */}
      <RoundedBox args={[1.0, 1.2, 0.01]} radius={0.12} smoothness={8} position={[0, 0, 0.13]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.1} roughness={0.05} />
      </RoundedBox>
      {/* Screen glow */}
      <RoundedBox args={[0.85, 1.0, 0.005]} radius={0.1} smoothness={8} position={[0, 0, 0.135]}>
        <meshStandardMaterial color="#1a3a6a" emissive="#1a3a6a" emissiveIntensity={0.5} metalness={0} roughness={1} />
      </RoundedBox>
      {/* Crown */}
      <Cylinder args={[0.06, 0.06, 0.3, 16]} position={[0.65, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </Cylinder>
      {/* Strap top */}
      <RoundedBox args={[0.95, 0.8, 0.12]} radius={0.06} position={[0, 1.25, -0.03]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0} roughness={0.9} />
      </RoundedBox>
      {/* Strap bottom */}
      <RoundedBox args={[0.95, 0.8, 0.12]} radius={0.06} position={[0, -1.25, -0.03]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0} roughness={0.9} />
      </RoundedBox>
    </group>
  );
}

function LaptopModel({ color }) {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.4;
  });

  return (
    <group ref={group}>
      {/* Base */}
      <RoundedBox args={[2.8, 0.12, 2.0]} radius={0.05} position={[0, -0.5, 0]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
      </RoundedBox>
      {/* Keyboard area */}
      <RoundedBox args={[2.5, 0.01, 1.5]} radius={0.02} position={[0, -0.43, 0.1]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.8} />
      </RoundedBox>
      {/* Screen base */}
      <RoundedBox args={[2.8, 0.1, 1.9]} radius={0.05} position={[0, 0.62, -0.95]} rotation={[-1.2, 0, 0]}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
      </RoundedBox>
      {/* Screen */}
      <RoundedBox args={[2.5, 0.02, 1.55]} radius={0.04} position={[0, 0.65, -0.88]} rotation={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.1} roughness={0.05} />
      </RoundedBox>
      {/* Screen display */}
      <RoundedBox args={[2.2, 0.01, 1.3]} radius={0.03} position={[0, 0.68, -0.83]} rotation={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#1a2a4a" emissive="#1a2a4a" emissiveIntensity={0.4} />
      </RoundedBox>
    </group>
  );
}

function GenericModel({ color }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y += 0.008;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <RoundedBox ref={mesh} args={[1.8, 1.8, 0.3]} radius={0.15} smoothness={8}>
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </RoundedBox>
  );
}

function ProductScene({ product }) {
  const modelProps = { color: product.modelColor || '#1a1a1a' };

  const renderModel = () => {
    switch (product.category) {
      case 'Audio': return <HeadphonesModel {...modelProps} />;
      case 'Indossabili': return <WatchModel {...modelProps} />;
      case 'Computer': return <LaptopModel {...modelProps} />;
      default: return <GenericModel {...modelProps} />;
    }
  };

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 2, -5]} intensity={0.4} color="#c8d4f0" />
      <pointLight position={[0, -3, 3]} intensity={0.3} color="#f0e8d8" />
      <Environment preset="studio" />
      {renderModel()}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={8}
        autoRotate={false}
        makeDefault
      />
    </>
  );
}

export default function Product3DViewer({ product }) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ProductScene product={product} />
        </Suspense>
      </Canvas>
      <p className="text-center text-[10px] tracking-[0.1em] uppercase text-stone-400 mt-2">
        Trascina per ruotare · Scroll per zoom
      </p>
    </div>
  );
}
