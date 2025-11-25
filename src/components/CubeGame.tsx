'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Square {
  id: number;
  x: number;
  y: number;
  color: string;
}

const GAME_COLORS = [
  '#FF6B35', // warm-orange
  '#4ECDC4', // teal
  '#95E1D3', // mint
  '#F7DC6F', // butter-yellow
  '#BB8FCE', // label-purple
  '#85C1E2', // sky-blue
  '#7EA3BD', // medium-blue
  '#FF5733', // red-orange
  '#C70039', // crimson
  '#900C3F', // burgundy
  '#581845', // dark-purple
  '#FFC300', // golden-yellow
  '#DAF7A6', // lime-green
  '#33FF57', // bright-green
  '#33FFF5', // cyan
  '#3357FF', // royal-blue
  '#8E44AD', // purple
  '#E74C3C', // red
  '#F39C12', // orange
  '#16A085', // turquoise
  '#27AE60', // green
  '#2980B9', // blue
  '#D35400', // pumpkin
  '#C0392B', // dark-red
  '#BDC3C7', // silver
  '#7F8C8D', // gray
  '#E67E22', // carrot
  '#1ABC9C', // aqua
  '#9B59B6', // amethyst
  '#34495E', // wet-asphalt
];

export default function CubeGame() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [squares, setSquares] = useState<Square[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [heroBackground, setHeroBackground] = useState('#0f2e5a');
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0, z: 0 });
  const [cubePosition, setCubePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [clickStartPos, setClickStartPos] = useState({ x: 0, y: 0 });
  const squareIdCounter = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });
  const animationRef = useRef<number>();

  // Start game
  const startGame = () => {
    if (isDragging || isRotating) return; // Don't start if dragging or rotating
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(15);
    setShowScore(false);
    setSquares([]);
    // Spawn 5 initial squares
    spawnMultipleSquares(5);
  };

  // Spawn multiple squares
  const spawnMultipleSquares = (count: number) => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    const newSquares: Square[] = [];
    
    for (let i = 0; i < count; i++) {
      newSquares.push({
        id: squareIdCounter.current++,
        x: Math.random() * (rect.width - 80),
        y: Math.random() * (rect.height - 80),
        color: GAME_COLORS[Math.floor(Math.random() * GAME_COLORS.length)],
      });
    }

    setSquares(prev => [...prev, ...newSquares]);
  };

  // Handle square click
  const handleSquareClick = (square: Square) => {
    setScore(prev => prev + 1);
    setHeroBackground(square.color);
    
    setSquares(prev => {
      const remaining = prev.filter(s => s.id !== square.id);
      const currentCount = remaining.length;
      
      // Randomly spawn 1-10 new squares (weighted towards fewer)
      const randomCount = Math.random();
      let newSquareCount;
      if (randomCount < 0.3) newSquareCount = 1; // 30% chance for 1 square
      else if (randomCount < 0.5) newSquareCount = 2; // 20% chance for 2 squares
      else if (randomCount < 0.7) newSquareCount = 3; // 20% chance for 3 squares
      else if (randomCount < 0.85) newSquareCount = Math.floor(Math.random() * 3) + 4; // 15% chance for 4-6 squares
      else newSquareCount = Math.floor(Math.random() * 4) + 7; // 15% chance for 7-10 squares
      
      // Ensure we don't exceed 10 total squares
      const allowedNewSquares = Math.min(newSquareCount, 10 - currentCount);
      
      if (allowedNewSquares > 0) {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          const newSquares: Square[] = [];
          
          for (let i = 0; i < allowedNewSquares; i++) {
            newSquares.push({
              id: squareIdCounter.current++,
              x: Math.random() * (rect.width - 80),
              y: Math.random() * (rect.height - 80),
              color: GAME_COLORS[Math.floor(Math.random() * GAME_COLORS.length)],
            });
          }
          
          return [...remaining, ...newSquares];
        }
      }
      
      return remaining;
    });
  };

  // Game timer
  useEffect(() => {
    if (!isGameActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsGameActive(false);
          setSquares([]);
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive, timeLeft]);

  // Hide score and reset after 2 seconds
  useEffect(() => {
    if (showScore) {
      const timeout = setTimeout(() => {
        setShowScore(false);
        setHeroBackground('#0f2e5a');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showScore]);

  // Update hero background and disable text selection during game
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.backgroundColor = heroBackground;
      heroSection.style.transition = 'background-color 0.3s ease';
      
      // Disable text selection during game
      if (isGameActive) {
        heroSection.style.userSelect = 'none';
        heroSection.style.webkitUserSelect = 'none';
        heroSection.style.cursor = 'crosshair';
      } else {
        heroSection.style.userSelect = '';
        heroSection.style.webkitUserSelect = '';
        heroSection.style.cursor = '';
      }
    }
  }, [heroBackground, isGameActive]);

  // Auto-rotate cube in random directions
  useEffect(() => {
    if (isDragging || isRotating) return;

    const animate = () => {
      rotationRef.current = {
        x: rotationRef.current.x + 0.3,
        y: rotationRef.current.y + 0.5,
        z: rotationRef.current.z + 0.2,
      };
      setCubeRotation({ ...rotationRef.current });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isRotating]);

  // Cube rotation handlers (when Shift is held)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      setIsRotating(false);
      setClickStartPos({ x: e.clientX, y: e.clientY });
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!e.shiftKey || e.buttons !== 1) return;
    
    const deltaX = e.clientX - clickStartPos.x;
    const deltaY = e.clientY - clickStartPos.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance > 5) {
      setIsRotating(true);
    }
    
    if (isRotating || distance > 5) {
      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.5,
        y: rotationRef.current.y + deltaX * 0.5,
        z: rotationRef.current.z,
      };
      setCubeRotation({ ...rotationRef.current });
      setClickStartPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.shiftKey) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      setTimeout(() => setIsRotating(false), 100);
    }
  };

  // Handle drag for position
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <>
      {/* 3D Cube - Draggable in Hero Section */}
      {/* 
        TO ADJUST INITIAL POSITION:
        Edit the "top" and "left" values in the style below
        - top: distance from top in pixels (e.g., 200 = 200px from top)
        - left: distance from left in pixels (e.g., 400 = 400px from left)
        You can use any number for precise positioning
      */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{ top: -300, left: -600, right: 600, bottom: 300 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="absolute z-30"
        style={{ 
          perspective: '1000px',
          top: '150px',
          left: '70%',
          transform: 'translateX(-50%)',
          x: cubePosition.x,
          y: cubePosition.y,
        }}
        onDrag={(_, info) => {
          setCubePosition({ x: info.offset.x, y: info.offset.y });
        }}
      >
        <div
          className="relative w-32 h-32 cursor-grab active:cursor-grabbing select-none"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg) rotateZ(${cubeRotation.z}deg)`,
            transition: isRotating ? 'none' : 'none',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={startGame}
        >
          {/* Front face - "CLICK ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'translateZ(64px)',
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">CLICK ME</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Back face - "DRAG ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'translateZ(-64px) rotateY(180deg)',
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">DRAG ME</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Right face - "CLICK ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'rotateY(90deg) translateZ(64px)',
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.15)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">CLICK ME</span>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/15 to-transparent pointer-events-none"></div>
          </div>

          {/* Left face - "DRAG ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'rotateY(-90deg) translateZ(64px)',
              backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.15)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">DRAG ME</span>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/15 to-transparent pointer-events-none"></div>
          </div>

          {/* Top face - "CLICK ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'rotateX(90deg) translateZ(64px)',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">CLICK ME</span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent pointer-events-none"></div>
          </div>

          {/* Bottom face - "DRAG ME" */}
          <div
            className="absolute w-32 h-32 bg-warm-orange border-4 border-deep-navy flex items-center justify-center font-mono font-bold text-white text-lg shadow-brutal"
            style={{ 
              transform: 'rotateX(-90deg) translateZ(64px)',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)',
            }}
          >
            <span className="relative z-10 drop-shadow-lg">DRAG ME</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </motion.div>

      {/* Game UI */}
      <AnimatePresence>
        {isGameActive && (
          <motion.div
            className="fixed top-24 right-8 z-40 bg-warm-orange text-deep-navy p-4 border-4 border-deep-navy shadow-brutal"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <div className="font-mono font-bold text-xl">TIME: {timeLeft}s</div>
            <div className="font-mono font-bold text-xl">SCORE: {score}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score Display */}
      <AnimatePresence>
        {showScore && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-navy/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-warm-orange text-deep-navy p-12 border-8 border-deep-navy shadow-brutal"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <h2 className="font-display text-6xl font-black mb-4">GAME OVER!</h2>
              <p className="font-mono text-4xl font-bold">FINAL SCORE: {score}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clickable Squares */}
      <AnimatePresence>
        {squares.map(square => (
          <motion.div
            key={square.id}
            className="absolute w-16 h-16 border-4 border-white cursor-pointer shadow-brutal select-none z-50"
            style={{
              left: square.x,
              top: square.y,
              backgroundColor: square.color,
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0, rotate: -360 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleSquareClick(square)}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
