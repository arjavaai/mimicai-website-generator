'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Desktop spotlight */}
      <Spotlight
        className="fixed top-1/4 left-1/4 md:block hidden"
        size={300}
      />
      
      {/* Mobile spotlight */}
      <Spotlight
        className="fixed top-1/4 left-1/2 md:hidden block"
        size={150}
      />
      
      {/* Mobile layout - stacked with absolute positioning for text */}
      <div className="md:hidden block relative h-screen">
        {/* Full-height 3D scene */}
        <div className="absolute inset-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        {/* Text overlay at bottom with gradient background */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-10 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
              Interactive 3D
            </h1>
            <p className="mt-4 text-neutral-300 text-lg text-center">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>
        </div>
      </div>
      
      {/* Desktop layout - side by side */}
      <div className="hidden md:flex flex-row min-h-screen">
        {/* Text content */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-md">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D
            </h1>
            <p className="mt-4 text-neutral-300 text-xl">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>
        </div>

        {/* 3D scene */}
        <div className="w-1/2 h-screen relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
