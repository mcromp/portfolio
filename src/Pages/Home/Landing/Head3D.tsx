import { MapControls, Stars, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Head3DModel from "../../../Assets/Head3DModel";

const Head3D = () => {
 return (
  <Canvas className="head3d">
   <Suspense
    fallback={
     <Text color="black" fontSize={3}>
      Loading...
     </Text>
    }
   >
    <MapControls enableZoom={false} />
    <ambientLight intensity={0.5} />
    <spotLight position={[100, 15, 10]} angle={0.3} />
    <Stars factor={10} saturation={0} fade />
    <Head3DModel position={[0, 0, 0]} scale={[20, 20, 20]} />
    <Text color="black" fontSize={0.3}>
     get out of my head
    </Text>
   </Suspense>
  </Canvas>
 );
};

export default Head3D;
