import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Chatbot from './components/Chatbot';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    // Preload critical resources if needed
    const preloadResources = async () => {
      // You can add actual resource preloading here if needed
      // For now, we're just using the loading animation
    };

    preloadResources();
    // Loading state is managed by the LoadingScreen component
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          {!isLoading && <Navbar />}
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
            {!isLoading && <Footer />}
          </div>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
