import { motion } from 'framer-motion';
import { Workflow, ArrowRight, Zap, RefreshCw, Clock, CheckCircle, Settings, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AIWorkflows = () => {
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
                AI-Powered <span className="text-[#F26E50]">Workflow</span> Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline your business processes with intelligent workflow automation powered by advanced AI. Eliminate repetitive tasks and focus on what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Get Started
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  See Examples
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
                    src="/workflow.png" 
                    alt="AI Workflow Automation" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Workflows?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow automation solutions deliver tangible benefits to your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-[#F26E50]" />,
                title: "Save Time",
                description: "Reduce manual work by up to 80% with automated processes that run 24/7."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Increase Efficiency",
                description: "Streamline operations and eliminate bottlenecks in your business processes."
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-[#F26E50]" />,
                title: "Reduce Errors",
                description: "Minimize human error with precise, consistent automated workflows."
              },
              {
                icon: <Settings className="w-10 h-10 text-[#F26E50]" />,
                title: "Scale Operations",
                description: "Easily scale your processes as your business grows without adding overhead."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How AI Workflows Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent workflow automation platform connects your systems and processes with AI-powered decision making.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#F26E50]/20 via-[#F26E50] to-[#F26E50]/20 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  title: "Connect Systems",
                  description: "Integrate with your existing tools and data sources through our extensive API connections.",
                  icon: <Layers className="w-12 h-12 text-[#F26E50]" />
                },
                {
                  step: "2",
                  title: "Design Workflows",
                  description: "Use our visual workflow builder to create custom processes with AI-powered decision points.",
                  icon: <Workflow className="w-12 h-12 text-[#F26E50]" />
                },
                {
                  step: "3",
                  title: "Automate & Optimize",
                  description: "Deploy your workflows and continuously improve them with AI-driven insights.",
                  icon: <RefreshCw className="w-12 h-12 text-[#F26E50]" />
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
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#F26E50]/10 mb-6 mx-auto relative">
                    <div className="absolute inset-0 rounded-full border-2 border-[#F26E50]/30 animate-ping opacity-50" style={{ animationDelay: `${index * 0.3}s` }}></div>
                    <div className="relative flex items-center justify-center">
                      <span className="text-[#F26E50] text-4xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Workflow Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how businesses across industries are leveraging our AI workflow automation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Onboarding",
                description: "Automate the entire customer onboarding process from initial contact to account setup and welcome communications.",
                industry: "Financial Services"
              },
              {
                title: "Content Approval Workflows",
                description: "Streamline content creation, review, and publishing with intelligent routing and automated quality checks.",
                industry: "Marketing"
              },
              {
                title: "Supply Chain Management",
                description: "Optimize inventory management, order processing, and logistics with AI-powered forecasting and automation.",
                industry: "Retail & E-commerce"
              },
              {
                title: "HR Process Automation",
                description: "Automate employee onboarding, time-off requests, performance reviews, and other HR processes.",
                industry: "Human Resources"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <span className="bg-[#F26E50]/20 text-[#F26E50] px-3 py-1 rounded-full text-sm">
                    {useCase.industry}
                  </span>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business Processes?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI workflow automation can transform your operations and drive efficiency.
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

export default AIWorkflows; 