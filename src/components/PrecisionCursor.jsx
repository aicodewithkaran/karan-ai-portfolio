import React, { useEffect, useState } from 'react';
import { useScanShield } from '../context/ScanShieldContext';

export default function PrecisionCursor() {
  const { customCursor } = useScanShield();
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!customCursor) return;

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [customCursor]);

  if (!customCursor) return null;

  return (
    <>
      {/* Precision Dot Pointer */}
      <div
        className="fixed w-2 h-2 bg-indigo-500 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#6366f1] hidden md:block"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      
      {/* Soft Laser Ring */}
      <div
        className="fixed w-8 h-8 border border-indigo-500/40 rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  );
}
