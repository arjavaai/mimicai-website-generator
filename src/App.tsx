import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
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
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
