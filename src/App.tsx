import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { ReactNode, ComponentType } from "react";
import { useState, useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import RouteTransition from './components/RouteTransition';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import FloatingProgressBar from "./components/FloatingProgressBar";
import { SmoothCursor } from "./components/ui/smooth-cursor";

// Service Pages
import AIVideoAds from "./components/services/AIVideoAds";
import ContentAutomation from "./components/services/ContentAutomation";
import AIProductPhotography from "./components/services/AIProductPhotography";
import AIAgents from "./components/services/AIAgents";
import AIWorkflows from "./components/services/AIWorkflows";
import SaasProducts from "./components/services/SaasProducts";
import RagImplementation from "./components/services/RagImplementation";
import LLMFinetune from "./components/services/LLMFinetune";
import WebsiteDevelopment from "./components/services/WebsiteDevelopment";
import CorporateWorkshops from "./components/services/CorporateWorkshops";
const Chatbot = lazy(() => import('./components/Chatbot'));

interface AppProps {
  Router?: ComponentType<{ children: ReactNode }>;
}

const queryClient = new QueryClient();

const App = ({ Router = BrowserRouter }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false);

  // Only show loading screen on client side, not during SSR
  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsChatbotLoaded(true), 1000);
      }, 1000); // Reduced delay for better UX

      return () => clearTimeout(timer);
    } else {
      // Server-side: no loading delay, load chatbot immediately for SEO
      setIsChatbotLoaded(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && typeof window !== 'undefined' && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="relative">
            <RouteTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Legal Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                
                {/* Service Routes */}
                <Route path="/services/ai-video-ads" element={<AIVideoAds />} />
                <Route path="/services/content-automation" element={<ContentAutomation />} />
                <Route path="/services/ai-product-photography" element={<AIProductPhotography />} />
                <Route path="/services/ai-agents" element={<AIAgents />} />
                <Route path="/services/ai-workflows" element={<AIWorkflows />} />
                <Route path="/services/saas-products" element={<SaasProducts />} />
                <Route path="/services/rag-implementation" element={<RagImplementation />} />
                <Route path="/services/llm-finetune" element={<LLMFinetune />} />
                <Route path="/services/website-development" element={<WebsiteDevelopment />} />
                <Route path="/services/corporate-workshops" element={<CorporateWorkshops />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RouteTransition>
          </main>
          <div className="footer-wrapper relative z-[45]">
            <Footer />
          </div>
          {isChatbotLoaded && (
            <Suspense fallback={null}>
              <Chatbot />
            </Suspense>
          )}
          <FloatingProgressBar />
          <SmoothCursor />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
