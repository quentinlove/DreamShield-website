// components/3DViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function EarcupModel() {
  const { scene } = useGLTF("/3d-models/earcup.glb");
  return <primitive object={scene} />;
}

export default function Viewer() {
  return (
    <div className="w-full h-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <EarcupModel />
        <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
