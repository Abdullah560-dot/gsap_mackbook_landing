import { Suspense, memo, useCallback, useMemo } from "react";
import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";

import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import { useMediaQuery } from "react-responsive";

// Pre-load models
useGLTF.preload("/models/macbook-14.glb");
useGLTF.preload("/models/macbook-16.glb");

const ProductViewer = memo(() => {
  // Optimized store access using useCallback
  const color = useMacbookStore((state) => state.color);
  const scale = useMacbookStore((state) => state.scale);
  const setColor = useMacbookStore((state) => state.setColor);
  const setScale = useMacbookStore((state) => state.setScale);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Memoized click handlers
  const handleColorChange = useCallback(
    (newColor) => {
      setColor(newColor);
    },
    [setColor]
  );

  const handleScaleChange = useCallback(
    (newScale) => {
      setScale(newScale);
    },
    [setScale]
  );

  // Memoize StudioLights to prevent unnecessary re-renders
  const MemoizedLights = useMemo(() => <StudioLights />, []);

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => handleColorChange("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => handleColorChange("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => handleScaleChange(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => handleScaleChange(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        dpr={isMobile ? 1 : [1, 2]} // lower DPR on mobile for performance
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: false,
          stencil: false,
          depth: true,
        }}
        camera={{
          position: [0, 2, 5],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        performance={{
          min: 0.5,
        }}
      >
        <Suspense fallback={null}>
          {MemoizedLights}
          <ModelSwitcher
            scale={isMobile ? scale - 0.03 : scale}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
    </section>
  );
});

export default ProductViewer;
