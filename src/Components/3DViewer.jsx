// components/3DViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function EarcupModel() {
  const { scene } = useGLTF("/images/3d-models/earcup3.glb");
  return <primitive object={scene} />;
}

// accept a `className` prop and forward it to the wrapper
export default function Viewer({ className="h-64 md:h-96 lg:h-[500px]"
}) {
  return (
    <div className={`${className} overflow-hidden`}>
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <EarcupModel />
        <OrbitControls enablePan={false} minDistance={2} maxDistance={5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
