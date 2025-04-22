import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { useState, useEffect } from "react";

// Create a simple event system for cross-component communication
type Listener = (isOpen: boolean) => void;

const eventSystem = {
  listeners: new Set<Listener>(),
  subscribe: (listener: Listener) => {
    eventSystem.listeners.add(listener);
    return () => {
      eventSystem.listeners.delete(listener);
    };
  },
  emit: (value: boolean) => {
    eventSystem.listeners.forEach(listener => listener(value));
  }
};

// Export the function to be used by the Chatbot component
export const setChatbotState = (isOpen: boolean) => {
  eventSystem.emit(isOpen);
};

const FloatingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Subscribe to chatbot state changes
    const unsubscribe = eventSystem.subscribe((chatbotOpen) => {
      setIsVisible(!chatbotOpen);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / windowHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-3 bottom-3 z-50 scale-[0.45] md:scale-[0.5] origin-bottom-right">
      <div className="bg-white/10 backdrop-blur-lg rounded-full p-1.5 shadow-lg hover:scale-105 transition-transform duration-200">
        <div className="text-white text-sm md:text-base">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={scrollProgress}
            gaugePrimaryColor="#f97316"
            gaugeSecondaryColor="#fed7aa"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingProgressBar; 