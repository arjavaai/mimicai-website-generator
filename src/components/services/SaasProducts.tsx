import { motion } from 'framer-motion';
import { Code, Server, Globe, Shield, Zap, Users, BarChart, Layers, Cloud, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SaasProducts = () => {
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
                Custom <span className="text-[#F26E50]">SaaS</span> Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build scalable, feature-rich SaaS products with our expert development team. From concept to launch and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Start Your Project
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="SaaS Development" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* SaaS Development Process */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our SaaS Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to build successful SaaS products that meet your business goals.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F26E50] to-purple-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "We dive deep into your business goals, target audience, and market landscape to develop a comprehensive SaaS strategy.",
                  features: [
                    "Market research and competitor analysis",
                    "User persona development",
                    "Business model validation",
                    "Feature prioritization"
                  ],
                  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
                  align: "right"
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  description: "We create intuitive user experiences and robust technical architecture to support your SaaS product.",
                  features: [
                    "UX/UI design and prototyping",
                    "Technical architecture planning",
                    "Database schema design",
                    "API structure definition"
                  ],
                  image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop",
                  align: "left"
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "Our expert developers build your SaaS product using modern technologies and best practices.",
                  features: [
                    "Agile development methodology",
                    "Continuous integration/deployment",
                    "Comprehensive testing protocols",
                    "Security implementation"
                  ],
                  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
                  align: "right"
                },
                {
                  step: "04",
                  title: "Launch & Growth",
                  description: "We help you launch your SaaS product and implement strategies for user acquisition and retention.",
                  features: [
                    "Deployment and infrastructure setup",
                    "Analytics implementation",
                    "Marketing support",
                    "Ongoing maintenance and updates"
                  ],
                  image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1470&auto=format&fit=crop",
                  align: "left"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${process.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center relative`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-[#F26E50] items-center justify-center z-10">
                    <span className="text-white font-bold">{process.step}</span>
                  </div>
                  
                  <div className="md:w-1/2 space-y-4">
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <span className="text-[#F26E50] font-bold">{process.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{process.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-2xl font-bold">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                    <ul className="space-y-2">
                      {process.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1 text-[#F26E50]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-20"></div>
                      <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                        <img 
                          src={process.image} 
                          alt={process.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage modern technologies to build scalable, secure, and high-performing SaaS applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Globe className="w-12 h-12 text-[#F26E50]" />,
                technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
              },
              {
                title: "Backend",
                icon: <Server className="w-12 h-12 text-[#F26E50]" />,
                technologies: ["Node.js", "Python", "Ruby on Rails", "Java", "Go", ".NET Core"]
              },
              {
                title: "Database & Infrastructure",
                icon: <Database className="w-12 h-12 text-[#F26E50]" />,
                technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Azure", "Google Cloud"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  {tech.icon}
                  <h3 className="text-xl font-bold mt-4">{tech.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.technologies.map((item, i) => (
                    <span key={i} className="bg-black/40 text-white px-3 py-1 rounded-full text-sm border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses transform their ideas into successful SaaS products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FinTrack",
                category: "Financial Technology",
                description: "A comprehensive financial management platform for small businesses with automated bookkeeping and reporting.",
                results: "500% user growth in 12 months",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
              },
              {
                title: "HealthSync",
                category: "Healthcare",
                description: "Patient management system with integrated telehealth capabilities for medical practices.",
                results: "Reduced admin time by 65%",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
              },
              {
                title: "LearnHub",
                category: "Education",
                description: "Online learning platform with AI-powered personalized curriculum and progress tracking.",
                results: "98% student satisfaction rate",
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{study.title}</h3>
                    <span className="bg-[#F26E50]/20 text-[#F26E50] px-3 py-1 rounded-full text-xs">
                      {study.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex items-center gap-2 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <span className="font-medium">{study.results}</span>
                  </div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your SaaS Product?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's turn your vision into a successful SaaS business. Our team is ready to help you at every step.
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

export default SaasProducts; 