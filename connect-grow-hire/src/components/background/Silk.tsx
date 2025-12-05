/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SpinningPlane() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <meshBasicMaterial color="#7B7481" />
    </mesh>
  );
}

export default function Silk() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpinningPlane />
      </Canvas>
    </div>
  );
}
