import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ContactShadows, useGLTF } from '@react-three/drei';


function Cube() {
  const meshRef = useRef(null);

  useFrame(() => {
    // rotate the cube around its axes
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2,2,2]}/>
      <meshStandardMaterial />
    </mesh>
  )
}
function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./assets/models/chrome.gltf')
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useFrame(() => {
    // rotate the cube around its axes
    // if (!groupRef.current) {
    //   return;
    // }

    group.current.rotation.y -= 0.002;
    
    // groupRef.current.rotation.y += 0.01;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <mesh geometry={nodes.mesh_0.geometry} material={materials['Chrome - Black']} />
          <mesh geometry={nodes.mesh_1.geometry} material={materials['Chrome - Black']} />
        </group>
      </group>
    </group>
  )
}

export default function Hero({ hero }) {
  const heroContainer = useRef('.hero');

  return (
    <section className="hero">
      <Canvas gl={{ toneMappingExposure: 0.7 }}>
        <PerspectiveCamera makeDefault fov={ 75 } position={[0, 0, 5]} />
        <Suspense fallback={null}>
          {/* <ambientLight intensity={0.1} angle={0.1} penumbra={1} /> */}
          <directionalLight position={[10,10,5]} intensity={0.5} />
          <directionalLight position={[10,10,5]} intensity={0.1} />
          <Model /> 
          {/* <spotLight angle={1} position={[-80, 200, -100]} intensity={1} /> */}
          <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
        </Suspense>
        {/* <Cube /> */}
      </Canvas>
      <h1>
        {hero.heading}
      </h1>
    </section>
  );
}