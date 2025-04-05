import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap, BarChart, Settings, ArrowRight, FileText, Server, Bot, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LLMFinetune = () => {
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
                <span className="text-[#F26E50]">LLM</span> Fine-Tuning Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Customize large language models to your specific domain, data, and use cases for superior performance and competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Discuss Your Project
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  Learn More
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
                  <div className="bg-zinc-900/80 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Brain className="w-8 h-8 text-[#F26E50]" />
                        <div>
                          <h3 className="font-bold">Base LLM</h3>
                          <p className="text-xs text-gray-400">Foundation model</p>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#F26E50]" />
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Brain className="w-8 h-8 text-[#F26E50]" />
                          <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                        <div>
                          <h3 className="font-bold">Custom LLM</h3>
                          <p className="text-xs text-gray-400">Fine-tuned for you</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">Your Domain Data</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[85%]"></div>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">Custom Instructions</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[70%]"></div>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">Parameter Optimization</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[90%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-sm text-green-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4" />
                        <span className="font-medium">Performance Improvement</span>
                      </div>
                      <p>+78% accuracy on domain-specific tasks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What is LLM Fine-tuning Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What is LLM Fine-tuning?</h2>
              <p className="text-gray-300 mb-6">
                LLM fine-tuning is the process of adapting a pre-trained large language model to perform specific tasks or operate within specialized domains by training it on additional, targeted data. This process enhances the model's capabilities for your specific use cases while maintaining its general knowledge.
              </p>
              
              <div className="space-y-6 mt-8">
                {[
                  {
                    icon: <Database className="text-[#F26E50]" />,
                    title: "Domain Adaptation",
                    description: "Train models to understand your industry's terminology and concepts"
                  },
                  {
                    icon: <Bot className="text-[#F26E50]" />,
                    title: "Behavior Alignment",
                    description: "Align model outputs with your brand voice and communication style"
                  },
                  {
                    icon: <Lock className="text-[#F26E50]" />,
                    title: "Proprietary Knowledge",
                    description: "Incorporate your organization's unique knowledge and expertise"
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
                <h3 className="text-xl font-bold mb-4">Before vs. After Fine-tuning</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-400">Base Model Response</span>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-white">
                      <p className="mb-2 text-sm text-gray-400">Query: "What's the recommended treatment for condition X?"</p>
                      <p>There are several treatments for condition X, including medication A, therapy B, and lifestyle changes C. It's important to consult with a healthcare professional to determine the best approach for your specific situation.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <Brain className="w-5 h-5 text-green-400" />
                        <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-green-400">Fine-tuned Model Response</span>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-lg text-white border border-green-500/30">
                      <p className="mb-2 text-sm text-gray-400">Query: "What's the recommended treatment for condition X?"</p>
                      <p>Based on our hospital's clinical guidelines (updated March 2023), the first-line treatment for condition X is medication D at 10mg daily, followed by therapy protocol E if symptoms persist after 4 weeks. Our specialists in the Neurology department (ext. 4567) can provide personalized treatment plans during Tuesday and Thursday clinics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Benefits of LLM Fine-tuning</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how fine-tuning can transform generic AI models into powerful tools tailored specifically for your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Enhanced Performance",
                description: "Significantly improve accuracy and relevance for your specific use cases and domain."
              },
              {
                icon: <Lock className="w-10 h-10 text-[#F26E50]" />,
                title: "Competitive Advantage",
                description: "Create AI capabilities unique to your business that competitors can't easily replicate."
              },
              {
                icon: <Database className="w-10 h-10 text-[#F26E50]" />,
                title: "Knowledge Integration",
                description: "Incorporate your proprietary data and expertise into the model's knowledge base."
              },
              {
                icon: <Bot className="w-10 h-10 text-[#F26E50]" />,
                title: "Consistent Brand Voice",
                description: "Ensure AI outputs match your organization's communication style and values."
              },
              {
                icon: <Settings className="w-10 h-10 text-[#F26E50]" />,
                title: "Customized Capabilities",
                description: "Optimize the model for specific tasks that are most valuable to your business."
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#F26E50]" />,
                title: "Reduced Costs",
                description: "Improve efficiency and reduce the need for extensive prompt engineering or human review."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Fine-tuning Process */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Fine-tuning Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a comprehensive methodology to create custom LLMs that deliver exceptional results for your specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We work with you to understand your specific use cases, domain, and performance requirements.",
                icon: <FileText className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "02",
                title: "Data Collection & Preparation",
                description: "We help you gather, clean, and structure the right data for effective fine-tuning.",
                icon: <Database className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "03",
                title: "Base Model Selection",
                description: "We select the optimal foundation model based on your requirements and constraints.",
                icon: <Brain className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "04",
                title: "Fine-tuning Execution",
                description: "We implement advanced fine-tuning techniques optimized for your specific objectives.",
                icon: <Settings className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "05",
                title: "Evaluation & Iteration",
                description: "We rigorously test the model against your success criteria and refine as needed.",
                icon: <BarChart className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "06",
                title: "Deployment & Integration",
                description: "We help you deploy the fine-tuned model and integrate it into your existing systems.",
                icon: <Server className="w-12 h-12 text-[#F26E50]" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#F26E50]/10 rounded-full p-3">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#F26E50]">{step.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">LLM Fine-tuning Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how different industries are leveraging custom fine-tuned models to transform their operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Medical Diagnosis Assistant",
                description: "Fine-tuned LLMs that help healthcare professionals analyze symptoms, medical history, and test results to suggest potential diagnoses and treatment options based on the latest medical literature and clinical guidelines.",
                industry: "Healthcare"
              },
              {
                title: "Legal Contract Analysis",
                description: "Custom models trained on legal precedents and contract language to identify risks, inconsistencies, and opportunities in complex legal documents with high accuracy and domain-specific understanding.",
                industry: "Legal"
              },
              {
                title: "Financial Advisory",
                description: "Fine-tuned models that analyze market trends, company financials, and economic indicators to provide personalized investment recommendations aligned with specific investment strategies and risk profiles.",
                industry: "Finance"
              },
              {
                title: "Technical Support Automation",
                description: "Specialized LLMs trained on product documentation, troubleshooting guides, and support ticket history to provide accurate, technical solutions to customer problems in your specific product domain.",
                industry: "Technology"
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
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <span className="bg-[#F26E50]/20 text-[#F26E50] px-3 py-1 rounded-full text-sm">
                    {useCase.industry}
                  </span>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
                <div className="mt-6">
                  <Link to="/contact" className="flex items-center text-[#F26E50] hover:text-[#E05D40] transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Create Your Custom AI Model?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our LLM fine-tuning services can give your business a competitive edge with AI tailored specifically to your needs.
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

export default LLMFinetune; 