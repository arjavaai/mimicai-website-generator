import { motion } from 'framer-motion';
import { Camera, Image, Sparkles, Layers, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

const AIProductPhotography = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="AI Product Photography Studio - ThreeAtoms"
        description="Create stunning product images with AI. Professional product photography without expensive photo shoots. Generate high-quality product images for e-commerce and marketing."
        keywords="AI product photography, product images, e-commerce photography, AI image generation, product photo studio, professional product photos, automated photography"
        canonical="https://threeatoms.com/services/ai-product-photography/"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="text-[#F26E50]">Product Photography</span> Studio
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create stunning product images without expensive photo shoots. Our AI generates professional product photography for any item in any style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Get Started
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  View Gallery
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=768&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=768&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=768&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=768&auto=format&fit=crop"
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src={img} alt="Product" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="bg-[#F26E50]/80 text-white text-xs py-1 px-2 rounded">AI Generated</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI product photography platform makes it easy to create professional product images in minutes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Product",
                description: "Upload a simple photo of your product or provide a detailed text description."
              },
              {
                step: "02",
                title: "Choose Your Style",
                description: "Select from dozens of professional photography styles, backgrounds, and lighting options."
              },
              {
                step: "03",
                title: "Generate & Download",
                description: "Our AI creates multiple high-resolution product images ready for your website or marketing."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#F26E50]/50 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI product photography platform offers everything you need to create professional product images.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-10 h-10 text-[#F26E50]" />,
                title: "360° Product Views",
                description: "Generate images from any angle to create complete 360° product views."
              },
              {
                icon: <Image className="w-10 h-10 text-[#F26E50]" />,
                title: "Lifestyle Contexts",
                description: "Place your products in realistic lifestyle settings to showcase real-world use."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-[#F26E50]" />,
                title: "Automatic Retouching",
                description: "Perfect lighting, shadows, and details with AI-powered retouching."
              },
              {
                icon: <Layers className="w-10 h-10 text-[#F26E50]" />,
                title: "Batch Processing",
                description: "Generate images for multiple products or variations simultaneously."
              },
              {
                icon: <Palette className="w-10 h-10 text-[#F26E50]" />,
                title: "Custom Branding",
                description: "Maintain consistent brand aesthetics across all generated images."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Instant Variations",
                description: "Create multiple style variations of the same product with one click."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Product Photography?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses saving time and money with our AI product photography platform.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIProductPhotography; 