'use client'

import { Suspense, lazy, useState } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="relative">
            {/* Outer circle */}
            <motion.div 
              className="absolute rounded-full bg-white"
              animate={{ 
                width: [50, 100, 50],
                height: [50, 100, 50],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Inner circle (black) */}
            <motion.div 
              className="absolute rounded-full bg-black"
              animate={{ 
                width: [30, 70, 30],
                height: [30, 70, 30],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Center dot (white) */}
            <motion.div 
              className="absolute rounded-full bg-white"
              animate={{ 
                width: [10, 20, 10],
                height: [10, 20, 10],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
        </div>
      }
    >
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="relative">
              {/* Outer circle */}
              <motion.div 
                className="absolute rounded-full bg-white"
                animate={{ 
                  width: [50, 100, 50],
                  height: [50, 100, 50],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              
              {/* Inner circle (black) */}
              <motion.div 
                className="absolute rounded-full bg-black"
                animate={{ 
                  width: [30, 70, 30],
                  height: [30, 70, 30],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              
              {/* Center dot (white) */}
              <motion.div 
                className="absolute rounded-full bg-white"
                animate={{ 
                  width: [10, 20, 10],
                  height: [10, 20, 10],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          </div>
        )}
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </Suspense>
  )
}
