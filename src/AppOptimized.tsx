import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteTransition from "./components/RouteTransition";

// Lazy load all pages and non-critical components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Legal pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));

// Lazy load service pages
const AIVideoAds = lazy(() => import("./components/services/AIVideoAds"));
const ContentAutomation = lazy(() => import("./components/services/ContentAutomation"));
const AIProductPhotography = lazy(() => import("./components/services/AIProductPhotography"));
const AIAgents = lazy(() => import("./components/services/AIAgents"));
const AIWorkflows = lazy(() => import("./components/services/AIWorkflows"));
const SaasProducts = lazy(() => import("./components/services/SaasProducts"));
const RagImplementation = lazy(() => import("./components/services/RagImplementation"));
const LLMFinetune = lazy(() => import("./components/services/LLMFinetune"));
const WebsiteDevelopment = lazy(() => import("./components/services/WebsiteDevelopment"));
const CorporateWorkshops = lazy(() => import("./components/services/CorporateWorkshops"));

// Simple loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-t-[#F26E50] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Reduces unnecessary refetches
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // You can add actual resource preloading here if needed
      // For now, we're just using the loading animation
    };

    preloadResources();
    
    // Use a more efficient way to handle loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced loading time
    
    return () => clearTimeout(timer);
  }, []);

  // Lazy load the chatbot after the main content
  useEffect(() => {
    if (!isLoading) {
      const chatbotTimer = setTimeout(() => {
        setIsChatbotLoaded(true);
      }, 3000); // Load chatbot 3 seconds after main content
      
      return () => clearTimeout(chatbotTimer);
    }
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          {!isLoading && <Navbar />}
          <main>
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
          </main>
          {!isLoading && <Footer />}
          {isChatbotLoaded && !isLoading && <Chatbot />}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
