import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export const useKonamiCode = () => {
  const [sequence, setSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setSequence((prevSeq) => {
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        const newSeq = [...prevSeq, key];
        
        // Keep the sequence length max to the konami code length
        if (newSeq.length > konamiCode.length) {
          newSeq.shift();
        }
        
        // Check if the sequence matches
        if (newSeq.join('') === konamiCode.map(k => k.length === 1 ? k.toLowerCase() : k).join('')) {
          triggerEasterEgg();
          return []; // Reset after trigger
        }
        
        return newSeq;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerEasterEgg = () => {
    // Fire confetti from edges
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#10b981', '#3b82f6', '#ef4444']
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#10b981', '#3b82f6', '#ef4444']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    
    // Play a subtle sound or other effect if desired
    console.log("Easter egg triggered! 🎉");
  };
};
