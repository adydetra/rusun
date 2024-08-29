import './style.css'

import ReactDOM from 'react-dom/client';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Leva } from 'leva';
import { EcctrlJoystick } from './components/UI/EcctrlJoystick';
import Experience from './components/Experience';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);
  return <>{isTouchScreen && <EcctrlJoystick buttonNumber={5} />}</>;
};

root.render(
  <>
    <Leva collapsed />
    <EcctrlJoystickControls />
    <Canvas
      shadows
      camera={{
        fov: 65,
        near: 0.1,
        far: 1000,
      }}
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse') {
          (e.target as HTMLCanvasElement).requestPointerLock();
        }
      }}
    >
      <Suspense fallback={null}>
        <Experience />
        <Environment files="/textures/modern_bathroom_2k.hdr" background backgroundBlurriness={0.3} />
      </Suspense>
    </Canvas>
  </>
);
