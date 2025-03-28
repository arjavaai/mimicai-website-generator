'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Add a small delay before completing the animation
      const timeout = setTimeout(() => {
        setIsComplete(true);
        if (onLoadingComplete) {
          setTimeout(onLoadingComplete, 1000); // Call the callback after exit animation
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Outer circle */}
            <motion.div 
              className="absolute rounded-full bg-white"
              initial={{ width: 50, height: 50 }}
              animate={{ 
                width: progress < 100 ? 50 + (progress * 2) : 300,
                height: progress < 100 ? 50 + (progress * 2) : 300,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Inner circle (black) */}
            <motion.div 
              className="absolute rounded-full bg-black"
              initial={{ width: 30, height: 30 }}
              animate={{ 
                width: progress < 100 ? 30 + (progress * 1.5) : 200,
                height: progress < 100 ? 30 + (progress * 1.5) : 200,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Center dot (white) */}
            <motion.div 
              className="absolute rounded-full bg-white"
              initial={{ width: 10, height: 10 }}
              animate={{ 
                width: progress < 100 ? 10 + (progress * 0.5) : 50,
                height: progress < 100 ? 10 + (progress * 0.5) : 50,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Progress text */}
            {progress < 100 && (
              <motion.div 
                className="absolute bottom-[-60px] text-white text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
