'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

function ShadersEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update posisi mouse saat mouse bergerak
  function handleMouseMove(event: MouseEvent) {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  // Animasikan efek shaders saat posisi mouse berubah
  React.useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.shader-effect', {
      duration: 0.5,
      x: mousePosition.x,
      y: mousePosition.y,
      ease: 'power2.out'
    });
  }, [mousePosition]);

  return (
    <div
      className="container"
      onMouseMove={() => {
        handleMouseMove;
      }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'red'
      }}
    >
      <motion.div
        className="shader-effect"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          position: 'absolute',
          borderRadius: '50%',
          zIndex: 1000
        }}
      />
    </div>
  );
}

export default ShadersEffect;
