import { MapControls, Stars, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Head3DModel from "../../Assets/Head3DModel";

const Head3D = (): JSX.Element => {
 const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });
 return (
  <div className="head3d">
   <Canvas
    className="canvas"
    style={{ height: isBigScreen ? "100vh" : "200px" }}
   >
    <Suspense fallback={null}>
     <MapControls enableZoom={false} />
     <ambientLight intensity={0.5} />
     <spotLight position={[100, 15, 10]} angle={0.3} />
     <Stars factor={10} saturation={0} fade />
     <Head3DModel position={[0, 0, 0]} scale={[20, 20, 20]} />
     <Text color="#222" fontSize={0.3}>
      Oh Hi! How are you?
     </Text>
    </Suspense>
   </Canvas>
  </div>
 );
};

export default Head3D;
