import { motion } from 'framer-motion';
import { Globe, Code, Layout, Smartphone, Zap, Shield, Database, Bot, ShoppingCart, GraduationCap, Home, MessageSquare, BrainCircuit, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
                Custom <span className="text-[#F26E50]">Website</span> Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Beautiful, responsive, and high-performing websites tailored to your business needs and brand identity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Start Your Project
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md">
                  View Portfolio
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
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop" 
                    alt="Website Development" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build websites that not only look great but also perform exceptionally well.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10 text-[#F26E50]" />,
                title: "Custom Design",
                description: "Unique, brand-aligned designs that stand out from templates and capture your brand essence."
              },
              {
                icon: <Code className="w-10 h-10 text-[#F26E50]" />,
                title: "Frontend Development",
                description: "Clean, efficient code using modern frameworks like React, Vue, or Angular."
              },
              {
                icon: <Database className="w-10 h-10 text-[#F26E50]" />,
                title: "Backend Development",
                description: "Robust server-side solutions with Node.js, Python, PHP, or other technologies."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-[#F26E50]" />,
                title: "Responsive Design",
                description: "Websites that look and function perfectly on all devices and screen sizes."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Performance Optimization",
                description: "Lightning-fast load times and smooth user experiences through advanced optimization."
              },
              {
                icon: <Shield className="w-10 h-10 text-[#F26E50]" />,
                title: "Security & Maintenance",
                description: "Ongoing support to keep your website secure, updated, and running smoothly."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section - Enhanced with more details */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Website Development Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your business needs with our transparent pricing structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Static Business Website Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-[#F26E50]" />
                  <h3 className="text-2xl font-bold">Static Business Website</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Home Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    About Us Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Products/Services Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Contact Us Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Testimonials Section
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Privacy Policy Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Terms and Conditions Page
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Contact us for custom pricing based on requirements
                </p>
              </div>
            </motion.div>

            {/* Dynamic Business Website Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-[#F26E50]/30 rounded-lg overflow-hidden relative transform scale-105 lg:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26E50] to-purple-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Layout className="w-8 h-8 text-[#F26E50]" />
                  <h3 className="text-2xl font-bold">Dynamic Business Website</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All Static Website Features
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Blog/News Page
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Admin Panel
                  </li>
                  <li className="flex items-center gap-2 pl-6 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Blog Post Dashboard
                  </li>
                  <li className="flex items-center gap-2 pl-6 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Blog Editing/Posting
                  </li>
                  <li className="flex items-center gap-2 pl-6 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Database Connections
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                  <Link to="/contact">Most Popular</Link>
                </Button>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Contact us for custom pricing based on requirements
                </p>
              </div>
            </motion.div>

            {/* E-Commerce Website Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-8 h-8 text-[#F26E50]" />
                  <h3 className="text-2xl font-bold">E-Commerce Website</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Product Catalog
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Shopping Cart
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Payment Gateway Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    User Accounts/Profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Order Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Inventory Management
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Product Review System
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Contact us for custom pricing based on requirements
                </p>
              </div>
            </motion.div>
          </div>

          {/* Custom Full-Stack Applications Section */}
          <section className="py-20 bg-gradient-to-b from-black to-zinc-900/50">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-4">Custom & Full-Stack Solutions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Need something more specialized? We build custom web applications tailored to your unique business requirements.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Stack Application Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-8 h-8 text-[#F26E50]" />
                    <h3 className="text-2xl font-bold">Full-Stack Applications</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Comprehensive web applications with advanced functionality and database integration
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom Frontend & Backend Development
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Database Design & Implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      API Development & Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Authentication & Authorization Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#F26E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Scalable Cloud Infrastructure
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                    <Link to="/contact">Discuss Your Project</Link>
                  </Button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Contact us for custom pricing based on requirements
                  </p>
                </motion.div>

                {/* Custom Website Solutions Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-[#F26E50]/20 rounded-lg p-8 hover:border-[#F26E50]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-[#F26E50]" />
                    <h3 className="text-2xl font-bold">Custom Website Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Have unique requirements that don't fit into standard packages? We specialize in creating custom solutions for:
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#F26E50] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-medium">Industry-Specific Websites</span>
                        <p className="text-sm text-gray-400">Tailored for healthcare, finance, real estate, education, and more</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#F26E50] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-medium">Specialized Functionality</span>
                        <p className="text-sm text-gray-400">Booking systems, member portals, custom calculators, and more</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#F26E50] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-medium">Integration Requirements</span>
                        <p className="text-sm text-gray-400">Connect with your existing systems, CRMs, and third-party services</p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-zinc-900/70 rounded-lg p-4 mb-6 border border-[#F26E50]/10">
                    <p className="text-center text-sm">
                      <span className="text-[#F26E50] font-medium">Contact us for a personalized quote</span><br />
                      We'll analyze your requirements and provide a detailed proposal
                    </p>
                  </div>
                  <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                    <Link to="/contact">Share Your Requirements</Link>
                  </Button>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Contact us for custom pricing based on requirements
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* AI Integration Section - Enhanced */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Integration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your website with cutting-edge AI capabilities to improve user engagement and streamline operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-8 h-8 text-[#F26E50]" />
                <h3 className="text-2xl font-bold">AI Chatbot</h3>
              </div>
              <p className="text-gray-300 mb-4">
                24/7 automated customer support with intelligent responses
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Instant customer responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Training on your business data</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Human handoff capabilities</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                <Link to="/contact">Add to Website</Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Contact us for custom pricing based on requirements
              </p>
            </motion.div>

            {/* Content Generation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="w-8 h-8 text-[#F26E50]" />
                <h3 className="text-2xl font-bold">AI Content Generation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Automated content creation for blogs, product descriptions, and more
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">SEO-optimized content</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand voice customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Multilingual capabilities</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                <Link to="/contact">Add to Website</Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Contact us for custom pricing based on requirements
              </p>
            </motion.div>

            {/* Personalization Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-8 h-8 text-[#F26E50]" />
                <h3 className="text-2xl font-bold">AI Personalization</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Tailored user experiences based on behavior and preferences
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Personalized product recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Dynamic content adaptation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#F26E50] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">User behavior analytics</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white">
                <Link to="/contact">Add to Website</Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Contact us for custom pricing based on requirements
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Requirements Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Have Custom Requirements?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We specialize in building custom websites tailored to your specific business needs. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-3">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Full stack applications with AI integration - contact us for pricing
              </p>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create a website that perfectly represents your brand and drives results.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment; 