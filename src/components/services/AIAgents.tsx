import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, MessageSquare, BarChart, Settings, Users, Brain, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const AIAgents = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Custom AI Agents for Business | ThreeAtoms"
        description="Transform your business operations with our custom AI agents. Automate tasks, enhance customer service, and streamline operations with intelligent AI solutions."
        keywords="AI agents, business automation, custom AI, intelligent automation, AI assistants, virtual agents, AI for business"
        url="https://threeatoms.com/services/ai-agents"
        canonical="https://threeatoms.com/services/ai-agents/"
      />
      
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
              Custom <span className="text-[#F26E50]">AI Agents</span> for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Automate tasks, enhance customer service, and streamline operations with intelligent AI agents tailored to your specific business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                Explore Solutions
              </Button>
              <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                <a href="https://cal.com/threeatoms/30min" target="_blank" rel="noopener noreferrer">Schedule Demo</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* What Are AI Agents Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What Are AI Agents?</h2>
              <p className="text-gray-300 mb-6">
                AI agents are autonomous software entities powered by artificial intelligence that can perform tasks, make decisions, and interact with users and systems on your behalf.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Brain className="text-[#F26E50]" />,
                    title: "Intelligent Decision Making",
                    description: "Agents analyze data and context to make informed decisions without human intervention"
                  },
                  {
                    icon: <Workflow className="text-[#F26E50]" />,
                    title: "Process Automation",
                    description: "Automate complex workflows across multiple systems and platforms"
                  },
                  {
                    icon: <Users className="text-[#F26E50]" />,
                    title: "Human-like Interactions",
                    description: "Natural language capabilities for seamless communication with users"
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-20"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1677442135136-760c813a7542?q=80&w=2070&auto=format&fit=crop" 
                  alt="AI Agent Visualization" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                    <Bot className="text-[#F26E50]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Agent-Driven Solutions</h3>
                    <p className="text-gray-400 text-sm">Customized for your business needs</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Our AI agents can be deployed across various business functions, from customer service to data analysis, sales support, and more.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Agent Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI agents can transform different aspects of your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-10 h-10 text-[#F26E50]" />,
                title: "Customer Support Agents",
                description: "24/7 intelligent support that handles inquiries, resolves issues, and escalates when necessary."
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#F26E50]" />,
                title: "Data Analysis Agents",
                description: "Continuously monitor data streams, identify patterns, and generate actionable insights."
              },
              {
                icon: <Settings className="w-10 h-10 text-[#F26E50]" />,
                title: "Process Automation Agents",
                description: "Streamline complex workflows by connecting systems and executing multi-step processes."
              },
              {
                icon: <Users className="w-10 h-10 text-[#F26E50]" />,
                title: "Sales Assistant Agents",
                description: "Qualify leads, answer product questions, and guide prospects through the sales funnel."
              },
              {
                icon: <Cpu className="w-10 h-10 text-[#F26E50]" />,
                title: "IT Operations Agents",
                description: "Monitor systems, detect anomalies, and automatically resolve common technical issues."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Personal Assistant Agents",
                description: "Schedule meetings, manage emails, and handle administrative tasks for your team."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Process Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to develop and deploy custom AI agents for your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your business needs and identify opportunities for AI agent implementation."
              },
              {
                step: "02",
                title: "Agent Design",
                description: "We design the agent's capabilities, knowledge base, and integration points."
              },
              {
                step: "03",
                title: "Development & Training",
                description: "We develop and train the agent using your data and business rules."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "We deploy the agent and continuously optimize its performance based on feedback."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
                  <div className="text-5xl font-bold text-[#F26E50]/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 text-[#F26E50]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                )}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI Agents?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our custom AI agents can help you automate processes, improve customer experiences, and drive growth.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <a href="https://cal.com/threeatoms/30min" target="_blank" rel="noopener noreferrer">Schedule a Consultation</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgents; 