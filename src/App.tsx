import { useEffect } from "react";
import { createWindow, WindowManager } from "@spatialjs/core";
import HelloWorld from "./components/HelloWorld";
import { Canvas } from "@react-three/fiber";

function App() {
  useEffect(() => {
    createWindow(HelloWorld, {
      title: "Hello World",
      width: 1024,
      height: 768,
      id: "hello-world",
    });
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas gl={{ localClippingEnabled: true }}>
        <ambientLight intensity={0.5} />
        <WindowManager />
      </Canvas>
    </div>
  );
}
export default App;
