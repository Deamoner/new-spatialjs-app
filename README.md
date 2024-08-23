# SpatialJS First Spatial Applications in WebXR

<p align="center" suppressHydrationWarning>
  <strong style={{ fontSize: '1.5em', color: '#4a90e2' }} suppressHydrationWarning>
    Welcome to your first spatial application using SpatialJS and WebXR! 🚀
  </strong>
</p>
<br />
<p align="center">
  <img src="assets/main.png" width="600" alt="SpatialJS Hello World" />
</p>
<br />

This project serves as an exciting starting point for creating immersive spatial experiences right in your web browser. SpatialJS, combined with WebXR, opens up a world of possibilities for building interactive 3D environments that users can explore using virtual or augmented reality devices.

Here's what you can expect from this template:

1. **Easy Setup**: We've configured everything you need to get started quickly with React, Vite, and WebXR.
2. **Spatial Interactions**: Learn how to create and manipulate 3D objects in a virtual space.
3. **WebXR Integration**: Dive into the world of immersive web experiences with built-in WebXR support.
4. **Responsive Design**: Craft applications that work seamlessly across various devices and platforms.

Whether you're building a virtual art gallery, an interactive educational tool, or a cutting-edge gaming experience, this template provides the foundation you need to bring your spatial ideas to life.

Get ready to explore the exciting intersection of web development and spatial computing. Happy coding! 🎉

## Learn More

To dive deeper into SpatialJS and explore its full potential, visit our official documentation and resources:

[SpatialJS Documentation](https://spatialjs.dev)

This comprehensive guide will help you understand the core concepts, advanced features, and best practices for building immersive spatial applications using SpatialJS.

## Getting Started

Install the Base Template

```bash
npm create vite@latest new—spatialjs-app -- --template react-ts
```

Install the SpatialJS Core and Dependencies

```bash
npm install @spatialjs/core react @react-three/fiber three @react-three/uikit @types/three
```

Create a Basic Hello World Component using UI Kit Text

```tsx src/components/HelloWorld.tsx
import React from "react";
import { Text } from "@react-three/uikit";

const HelloWorld: React.FC = () => {
  return <Text color="#ffffff">Hello World</Text>;
};

export default HelloWorld;
```

Use the HelloWorld Component to create a SpatialJS Window on App start by adding the following code to your App Component

```tsx src/App.tsx
useEffect(() => {
  createWindow(HelloWorld, {
    title: "Hello World",
    width: 1024,
    height: 768,
  });
}, []);
```

Your Updated Component should look like this

```tsx src/App.tsx
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { createWindow, WindowManager } from "@spatialjs/core";
import HelloWorld from "./components/HelloWorld";
function App() {
  useEffect(() => {
    createWindow(HelloWorld, {
      title: "Hello World",
      width: 1024,
      height: 768,
    });
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas gl={{ localClippingEnabled: true }}>
        <WindowManager />
      </Canvas>
    </div>
  );
}
export default App;
```

Now you will be able to see your Hello World Window in the App Browser. You may see two windows as your component gets rendered twice.
You can add an `id` prop to make the window unique and not duplicated.

```tsx src/App.tsx
useEffect(() => {
  createWindow(HelloWorld, {
    title: "Hello World",
    width: 1024,
    height: 768,
    id: "hello-world",
  });
}, []);
```

The basic Windows can look a little dark and boring. Most Scenes need lighting to be visible.

Add a basic lighting setup to your scene by adding the following code to your App Component

```tsx src/App.tsx
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { createWindow, WindowManager } from "@spatialjs/core";
import HelloWorld from "./components/HelloWorld";

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
```

<br />
<p align="center">
  <img src="assets/lighted.png" width="600" alt="Hello World with Lighting" />
</p>
<br />

You've got a basic SpatialJS App up and running! 🎉

You can now start building your own SpatialJS App! 🚀

For more advanced examples, check out the [SpatialJS Examples](https://github.com/spatialjs/examples) repository.
Feel free to go through the multi-window example to learn more about how to create and manage multiple windows in a SpatialJS App.

## Support

For questions, bug reports, or feature requests, please open an issue on our [GitHub repository](https://github.com/Deamoner/spatialjs).

---

Built with ❤️ by [Deamoner](https://twitter.com/spatialmatty)

Visit my personal site: [mattydavis.ca](https://mattydavis.ca/)

Subscribe to my [YouTube channel](https://www.youtube.com/@mattjdavis) for more SpatialJS tutorials and updates!

Follow me on [Medium](https://medium.com/@mdavis-71283) for articles on SpatialJS, web development, and more!

Join the discord for more help and support: [discord.gg/tKNwtpDVJn](https://discord.gg/tKNwtpDVJn)
