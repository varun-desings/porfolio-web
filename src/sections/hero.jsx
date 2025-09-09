import { Canvas, useFrame } from '@react-three/fiber'
import { Astronaut } from "../components/Astronuat";
import HeroText from "../components/HeroText";
import ParallexBackground from "../components/ParallexBackground";
import { OrbitControls, Float, Loader } from '@react-three/drei';
import useWindowSize from '../hooks/useWindowSize';
import { easingDefinitionToFunction, scale } from 'motion/react';
import { damp } from 'three/src/math/MathUtils.js';
import { Suspense } from 'react';

const Hero = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const astronautProps = isMobile
  ? {position:[0.3,-6,0.2] , scale: 0.238}
  : {position: [2.3, -1.3, 0] , scale:0.428 }
  return (
    <section className="flex items-start justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden">
      <HeroText/>
      <ParallexBackground/>
      <figure className="absolute inset-0"
      style={{
        width:"100vw",
        height:"100vh",
        zIndex: "-1"
      }}
      >
        <Canvas>
          <Suspense callBack = {<Loader/>}
          >
          <Float>
          <Astronaut {...astronautProps} />
          </Float>
          </Suspense>
          <OrbitControls/>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state , delta) =>{
    // Log mouse coordinates for debugging
    console.log('Mouse coordinates:', state.mouse.x, state.mouse.y);
    
    // Damp each camera position component separately with more noticeable values
    state.camera.position.x = damp(state.camera.position.x, state.mouse.x * 2, 3, delta);
    state.camera.position.y = damp(state.camera.position.y, 1 + state.mouse.y * 2, 3, delta);
    state.camera.position.z = damp(state.camera.position.z, 5, 3, delta);
    
    // Update camera after changing position
    state.camera.updateMatrixWorld();
  });
}

export default Hero;
