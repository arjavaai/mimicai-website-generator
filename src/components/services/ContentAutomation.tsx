import { motion } from 'framer-motion';
import { Video, Mic, Edit, Search, Upload, Image, Calendar, Users, Repeat, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ContentAutomation = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="AI Content Automation for Personal Branding | ThreeAtoms"
        description="Scale your personal brand with our AI-powered content automation. We clone your voice and visual appearance to create consistent, high-quality videos while you focus elsewhere."
        keywords="content automation, AI video creation, personal branding, voice cloning, video cloning, AI content creation, brand scaling"
        url="https://threeatoms.com/services/content-automation"
        canonical="https://threeatoms.com/services/content-automation/"
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
                AI <span className="text-[#F26E50]">Content Automation</span> for Personal Branding
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Scale your personal brand with AI-powered content. We clone both your voice AND visual appearance to create consistent, high-quality videos while you focus on what matters most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Get Started
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  View Examples
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-30"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop" 
                    alt="Content Automation" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">AI-Generated Content</span>
                      </div>
                      <h3 className="text-xl font-bold">Your Brand, Amplified</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section - Enhanced with SVGs and animations */}
      <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F26E50]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Our Content Automation Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple 3-step process to multiply your content output without additional time investment
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#F26E50]/50 via-purple-500/50 to-[#F26E50]/50 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#F26E50]/10 mb-6 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-2 border-[#F26E50]/30 animate-ping opacity-50"></div>
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F26E50]">
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM12 20C7.5 20 4 17.5 4 12S7.5 4 12 4 20 7.5 20 12 17.5 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#F26E50]/10 text-[#F26E50] text-sm font-medium rounded-full px-3 py-1 inline-block mb-4">Step 1</div>
                <h3 className="text-xl font-bold mb-3 text-center">Record Base Content</h3>
                <p className="text-gray-300 text-center">
                  Provide us with 4-5 minute videos that capture your authentic style, voice, and mannerisms.
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300 md:mt-16"
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#F26E50]/10 mb-6 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-2 border-[#F26E50]/30 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F26E50]">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 3C10.1008 5.2129 9 8.4935 9 12C9 15.5065 10.1008 18.7871 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 3C13.8992 5.2129 15 8.4935 15 12C15 15.5065 13.8992 18.7871 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#F26E50]/10 text-[#F26E50] text-sm font-medium rounded-full px-3 py-1 inline-block mb-4">Step 2</div>
                <h3 className="text-xl font-bold mb-3 text-center">AI Cloning & Production</h3>
                <p className="text-gray-300 text-center">
                  We use AI to clone both your voice and visual appearance, creating multiple pieces of content that look and sound exactly like you.
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#F26E50]/10 mb-6 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-2 border-[#F26E50]/30 animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F26E50]">
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM12 20C7.5 20 4 17.5 4 12S7.5 4 12 4 20 7.5 20 12 17.5 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#F26E50]/10 text-[#F26E50] text-sm font-medium rounded-full px-3 py-1 inline-block mb-4">Step 3</div>
                <h3 className="text-xl font-bold mb-3 text-center">Distribution & Growth</h3>
                <p className="text-gray-300 text-center">
                  We handle posting, optimization, and analytics to grow your audience across platforms.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Results indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-black to-zinc-900 border border-[#F26E50]/20 rounded-lg p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F26E50]">
                <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold">The Result: 10-30× Content Output</span>
            </div>
            <p className="text-gray-300">
              Transform a single recording session into weeks of consistent, high-quality content across multiple platforms.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Included Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive Service Package</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to maintain a consistent content presence without the time investment
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#F26E50]" />,
                title: "Account Management",
                description: "We handle all aspects of your content platforms, from setup to optimization."
              },
              {
                icon: <Search className="w-10 h-10 text-[#F26E50]" />,
                title: "Content Research",
                description: "Identifying trending topics and relevant content ideas for maximum engagement."
              },
              {
                icon: <Edit className="w-10 h-10 text-[#F26E50]" />,
                title: "Script Writing",
                description: "Professional scripts tailored to your voice, style, and audience preferences."
              },
              {
                icon: <Video className="w-10 h-10 text-[#F26E50]" />,
                title: "Video Editing",
                description: "High-quality editing with graphics, transitions, and visual enhancements."
              },
              {
                icon: <Mic className="w-10 h-10 text-[#F26E50]" />,
                title: "Audio & Video Cloning",
                description: "Advanced AI technology that replicates both your voice and visual appearance for videos that are indistinguishable from ones you record yourself."
              },
              {
                icon: <Image className="w-10 h-10 text-[#F26E50]" />,
                title: "Thumbnail Creation",
                description: "Eye-catching thumbnails designed to maximize click-through rates."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to scale your content creation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Starter",
                feature: "10 Videos per Month",
                popular: false
              },
              {
                title: "Growth",
                feature: "20 Videos per Month",
                popular: true
              },
              {
                title: "Scale",
                feature: "30 Videos per Month",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-black/40 backdrop-blur-sm border ${plan.popular ? 'border-[#F26E50]/50 scale-105' : 'border-white/10'} rounded-lg overflow-hidden relative ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26E50] to-purple-600"></div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="bg-[#F26E50]/10 rounded-lg p-3 mb-6">
                    <span className="text-[#F26E50] font-medium">{plan.feature}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Account Management
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Content Research
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Script Writing
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Professional Editing
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Voice & Video Cloning
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom Thumbnails
                    </li>
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? 'bg-[#F26E50] hover:bg-[#E05D40]' : 'bg-zinc-800 hover:bg-zinc-700'} text-white`}>
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
                <div className="bg-zinc-900 p-4 text-center text-sm">
                  <span className="text-gray-400">Contact us for custom pricing based on requirements</span>
                </div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Personal Brand?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us handle your content creation while you focus on what you do best. Get started today with a consultation.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <a href="https://cal.com/threeatoms/30min" target="_blank" rel="noopener noreferrer">Schedule a Demo</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentAutomation;