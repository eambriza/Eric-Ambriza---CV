# 3D Cube Game Feature

## Overview
An interactive 3D cube game added to the hero section of the portfolio website. The cube serves as both a decorative element and an engaging mini-game.

## Features

### 3D Cube
- **Orange cube** with white text on two sides:
  - Front face: "CLICK ME"
  - Back face: "DRAG ME"
- **Draggable** - drag to move the cube anywhere in the hero section
- **Rotatable** - hold Shift and drag to rotate the cube in 3D space
- **Interactive instructions** - displays controls at the top when not playing
- **Centered** in the hero section initially

### Game Mechanics
1. **Start Game**: Click the cube to start
2. **Objective**: Click as many colored squares as possible within 15 seconds
3. **Squares**: 
   - Spawn randomly within the hero section only
   - Each square has a random color from the palette
   - Animated entrance and exit
4. **Background Change**: Hero section background changes to the color of each clicked square
5. **Score Display**: Shows during gameplay with timer and current score
6. **Game Over**: After 15 seconds, displays final score for 2 seconds
7. **Auto-Reset**: Returns to initial state after score display

## Color Palette
The game uses the following colors for squares:
- Warm Orange (#FF6B35)
- Teal (#4ECDC4)
- Mint (#95E1D3)
- Butter Yellow (#F7DC6F)
- Label Purple (#BB8FCE)
- Sky Blue (#85C1E2)
- Medium Blue (#7EA3BD)

## Technical Implementation
- Built with React and Framer Motion for smooth animations
- Uses CSS 3D transforms for cube rotation
- Game state managed with React hooks
- Responsive and works on all screen sizes
- No external game libraries required

## Files Modified
- `src/components/CubeGame.tsx` - New component
- `src/app/page.tsx` - Added CubeGame component import and render

## Usage
The game is automatically available on the homepage. Users can:
1. **Drag the cube** to move it anywhere within the hero section
2. **Hold Shift + Drag** to rotate the cube in 3D space
3. **Click the cube** to start the game (without dragging)
4. **Click squares** as they appear to score points
5. Watch the hero section background change to each clicked square's color
6. See their final score when the 15-second timer runs out
7. Everything resets automatically after 2 seconds
