import React from "react";
import "./App.css";

import { useEffect, useRef } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const NeonCursorEffect = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const CursorEffect = neonCursor({
      el: appRef.current,
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 100,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0055,
      sleepTimeCoefY: 0.0055,
    });
  }, []);

  return (
    <>
      <div
        id="app"
        ref={appRef}
        // style={{ height: "100vh", width: "100%" }}
      ></div>
    </>
  );
};

export default NeonCursorEffect;
