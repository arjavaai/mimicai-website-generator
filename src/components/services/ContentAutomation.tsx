import { motion } from 'framer-motion';
import { Bot, FileText, Sparkles, Repeat, Layers, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContentAutomation = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Content <span className="text-[#F26E50]">Automation</span> at Scale
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your content creation process with AI. Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                Try It Free
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md">
                See Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">See Our AI in Action</h2>
              <p className="text-gray-300 mb-6">
                Watch how our content automation platform transforms a simple prompt into fully-formed, engaging content in seconds.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="text-[#F26E50]" />,
                    title: "Save 10+ hours per week",
                    description: "Focus on strategy while AI handles content creation"
                  },
                  {
                    icon: <Repeat className="text-[#F26E50]" />,
                    title: "Consistent brand voice",
                    description: "Train the AI on your brand guidelines and tone"
                  },
                  {
                    icon: <Layers className="text-[#F26E50]" />,
                    title: "Multi-format output",
                    description: "Generate blog posts, social captions, emails, and more"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-400">AI Content Generator</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Prompt:</p>
                    <p className="text-white">Write a blog post about the benefits of AI in marketing</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Sparkles className="text-[#F26E50] animate-pulse" size={24} />
                  </div>
                  
                  <div className="bg-zinc-800/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Generated Content:</p>
                    <h4 className="text-lg font-bold text-white mb-2">5 Ways AI is Revolutionizing Modern Marketing</h4>
                    <p className="text-gray-300 text-sm">
                      In today's fast-paced digital landscape, artificial intelligence has emerged as a game-changer for marketing professionals. From personalized customer experiences to data-driven insights, AI tools are helping brands connect with their audience more effectively than ever before...
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-[#F26E50]/20 text-[#F26E50] text-xs py-1 px-2 rounded">SEO Optimized</span>
                      <span className="bg-[#F26E50]/20 text-[#F26E50] text-xs py-1 px-2 rounded">Engaging</span>
                      <span className="bg-[#F26E50]/20 text-[#F26E50] text-xs py-1 px-2 rounded">Factual</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our content automation platform is packed with features to help you create better content faster.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-10 h-10 text-[#F26E50]" />,
                title: "AI Content Generation",
                description: "Create blog posts, social media content, product descriptions, and more with a few clicks."
              },
              {
                icon: <FileText className="w-10 h-10 text-[#F26E50]" />,
                title: "Content Templates",
                description: "Choose from dozens of pre-built templates for different content types and industries."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-[#F26E50]" />,
                title: "Style Customization",
                description: "Adjust tone, style, and formatting to match your brand voice perfectly."
              },
              {
                icon: <Repeat className="w-10 h-10 text-[#F26E50]" />,
                title: "Bulk Generation",
                description: "Create multiple pieces of content simultaneously for different channels."
              },
              {
                icon: <Layers className="w-10 h-10 text-[#F26E50]" />,
                title: "Content Calendar",
                description: "Schedule and organize your content with our built-in calendar system."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "One-Click Publishing",
                description: "Publish directly to WordPress, social media, and other platforms."
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
              <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Content Creation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses saving time and resources with our AI content automation platform.
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

export default ContentAutomation; 