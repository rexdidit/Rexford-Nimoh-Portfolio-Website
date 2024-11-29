"use client";
import React, { useEffect, useState, useRef } from 'react';

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

const Cursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const actualPosition = useRef({ x: -50, y: -50 });
  const [position, setPosition] = useState({ x: -50, y: -50 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setPosition(prev => ({
        x: lerp(prev.x, actualPosition.current.x, 0.15), // Adjust factor for faster/slower following
        y: lerp(prev.y, actualPosition.current.y, 0.15)
      }));
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      actualPosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'white',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    opacity: visible ? 1 : 0,
    transition: 'opacity 150ms ease',
  };

  return <div style={cursorStyle} />;
};

export default Cursor;