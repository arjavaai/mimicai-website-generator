import { motion } from 'framer-motion';
import { Database, Search, FileText, Zap, Brain, Server, MessageSquare, BarChart, Bot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RagImplementation = () => {
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
                <span className="text-[#F26E50]">RAG</span> Implementation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Enhance your AI systems with Retrieval-Augmented Generation for more accurate, contextual, and reliable outputs based on your proprietary data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Explore Solutions
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md">
                  Technical Details
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
                    <div className="flex items-center gap-4 mb-4">
                      <Database className="w-8 h-8 text-[#F26E50]" />
                      <div>
                        <h3 className="font-bold">Knowledge Base</h3>
                        <p className="text-xs text-gray-400">Your proprietary data</p>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#F26E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <Search className="w-8 h-8 text-[#F26E50]" />
                      <div>
                        <h3 className="font-bold">Retrieval System</h3>
                        <p className="text-xs text-gray-400">Semantic search & ranking</p>
                      </div>
                    </div>
                    <div className="flex justify-center my-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#F26E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="flex items-center gap-4">
                      <Brain className="w-8 h-8 text-[#F26E50]" />
                      <div>
                        <h3 className="font-bold">LLM Generation</h3>
                        <p className="text-xs text-gray-400">Contextual responses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What is RAG Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What is RAG?</h2>
              <p className="text-gray-300 mb-6">
                Retrieval-Augmented Generation (RAG) is an AI framework that enhances large language models by retrieving relevant information from your knowledge base before generating responses. This approach combines the power of pre-trained language models with access to your specific, up-to-date information.
              </p>
              
              <div className="space-y-6 mt-8">
                {[
                  {
                    icon: <Database className="text-[#F26E50]" />,
                    title: "Knowledge Integration",
                    description: "Connect your proprietary data sources to your AI systems"
                  },
                  {
                    icon: <FileText className="text-[#F26E50]" />,
                    title: "Factual Accuracy",
                    description: "Ensure responses are based on verified information from your data"
                  },
                  {
                    icon: <Zap className="text-[#F26E50]" />,
                    title: "Contextual Relevance",
                    description: "Generate responses that are specifically tailored to your business context"
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
                <div className="bg-zinc-900/80 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">User Query</span>
                  </div>
                  <p className="bg-zinc-800 p-3 rounded-lg text-white">
                    What was our company's revenue growth in Q2 2023?
                  </p>
                </div>
                
                <div className="bg-zinc-900/80 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Search className="w-5 h-5 text-[#F26E50]" />
                    <span className="text-[#F26E50]">Retrieval</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-zinc-800 p-3 rounded-lg text-white text-sm">
                      <span className="text-[#F26E50] font-bold">Financial Report Q2 2023:</span> Revenue increased by 27% compared to Q2 2022...
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-lg text-white text-sm">
                      <span className="text-[#F26E50] font-bold">Investor Presentation:</span> Q2 2023 saw the highest quarterly growth in company history...
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-900/80 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">AI Response</span>
                  </div>
                  <p className="bg-zinc-800 p-3 rounded-lg text-white">
                    In Q2 2023, our company achieved a 27% revenue growth compared to the same period in 2022, marking our highest quarterly growth rate in company history. This was driven primarily by our expansion into new markets and the launch of our premium service tier.
                  </p>
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
            <h2 className="text-4xl font-bold mb-4">Benefits of RAG Implementation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how RAG can transform your AI applications and deliver superior results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-10 h-10 text-[#F26E50]" />,
                title: "Reduced Hallucinations",
                description: "Minimize AI fabrications by grounding responses in your verified data sources."
              },
              {
                icon: <Database className="w-10 h-10 text-[#F26E50]" />,
                title: "Proprietary Knowledge",
                description: "Leverage your organization's unique data and expertise in AI responses."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Enhanced Accuracy",
                description: "Deliver precise information that's relevant to your specific business context."
              },
              {
                icon: <Server className="w-10 h-10 text-[#F26E50]" />,
                title: "Data Security",
                description: "Keep sensitive information within your control while still utilizing AI capabilities."
              },
              {
                icon: <Bot className="w-10 h-10 text-[#F26E50]" />,
                title: "Customized AI Experience",
                description: "Create AI interactions that reflect your brand voice and domain expertise."
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#F26E50]" />,
                title: "Measurable Improvements",
                description: "Track and quantify the enhanced performance of your AI systems."
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
      
      {/* Implementation Process */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our RAG Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to implement RAG solutions tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data Assessment & Strategy",
                description: "We analyze your existing data sources, identify knowledge gaps, and develop a comprehensive RAG strategy.",
                icon: <Database className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "02",
                title: "Knowledge Base Creation",
                description: "We process, structure, and index your data to create an optimized knowledge base for retrieval.",
                icon: <FileText className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "03",
                title: "Retrieval System Development",
                description: "We build a sophisticated retrieval system with semantic search capabilities to find the most relevant information.",
                icon: <Search className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "04",
                title: "LLM Integration",
                description: "We integrate the retrieval system with appropriate language models and fine-tune for your specific use cases.",
                icon: <Brain className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "05",
                title: "Testing & Optimization",
                description: "We rigorously test the system against various queries and continuously optimize for accuracy and relevance.",
                icon: <BarChart className="w-12 h-12 text-[#F26E50]" />
              },
              {
                step: "06",
                title: "Deployment & Monitoring",
                description: "We deploy the RAG system in your environment and implement monitoring tools to ensure ongoing performance.",
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
            <h2 className="text-4xl font-bold mb-4">RAG Implementation Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how different industries are leveraging RAG to enhance their AI capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Support Automation",
                description: "Implement RAG to provide accurate, context-aware responses to customer inquiries based on your product documentation, knowledge base, and support history.",
                industry: "Customer Service"
              },
              {
                title: "Legal Document Analysis",
                description: "Use RAG to assist legal professionals in analyzing contracts, case law, and regulatory documents with accurate references to specific clauses and precedents.",
                industry: "Legal"
              },
              {
                title: "Healthcare Information Systems",
                description: "Enhance medical information systems with RAG to provide healthcare professionals with accurate, up-to-date information from medical literature and patient records.",
                industry: "Healthcare"
              },
              {
                title: "Financial Advisory Services",
                description: "Implement RAG to provide financial advisors with accurate market insights, company data, and regulatory information to support client recommendations.",
                industry: "Finance"
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
              <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your AI with RAG?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our RAG implementation services can transform your AI applications with accurate, contextual, and reliable information.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RagImplementation; 