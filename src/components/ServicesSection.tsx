import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import FlowingMenu from './FlowingMenu';
import { ArrowRight } from 'lucide-react';
import { 
  Globe, 
  Video, 
  Bot, 
  Workflow, 
  Database, 
  Code, 
  Brain, 
  Settings,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Static & Dynamic Websites",
    description: "Custom web development solutions tailored to your needs",
    icon: Globe,
    link: "/services/website-development"
  },
  {
    title: "AI Ads [Video Ads]",
    description: "AI-powered video advertisement creation and optimization",
    icon: Video,
    link: "/services/ai-video-ads"
  },
  {
    title: "Content Automation",
    description: "Streamline your content creation process with AI",
    icon: Bot,
    link: "/services/content-automation"
  },
  {
    title: "AI Product Photography",
    description: "AI-powered product photo shoots and image generation",
    icon: Camera,
    link: "/services/ai-product-photography"
  },
  {
    title: "AI Agents",
    description: "Custom AI agents for task automation and assistance",
    icon: Settings,
    link: "/services/ai-agents"
  },
  {
    title: "AI Workflows",
    description: "Automated AI-powered workflow solutions",
    icon: Workflow,
    link: "/services/ai-workflows"
  },
  {
    title: "SaaS Products",
    description: "Custom SaaS development and implementation",
    icon: Code,
    link: "/services/saas-products"
  },
  {
    title: "RAG Implementation",
    description: "Retrieval-Augmented Generation solutions",
    icon: Database,
    link: "/services/rag-implementation"
  },
  {
    title: "LLM Finetune",
    description: "Custom language model fine-tuning services",
    icon: Brain,
    link: "/services/llm-finetune"
  }
];

const flowingMenuItems = [
  { 
    link: '#', 
    text: 'AI Innovation', 
    image: '/images/flowing-menu/ai-innovation.webp'
  },
  { 
    link: '#', 
    text: 'Digital Solutions', 
    image: '/images/flowing-menu/digital-solutions.webp'
  },
  { 
    link: '#', 
    text: 'Future Tech', 
    image: '/images/flowing-menu/future-tech.webp'
  },
  { 
    link: '#', 
    text: 'Smart Automation', 
    image: '/images/flowing-menu/smart-automation.webp'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-black rounded-t-[50px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-cal text-white mb-4">Our Services</h2>
          <p className="text-gray-400 mb-12 font-matter">
            Discover our comprehensive range of AI and web development solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard 
                className="group cursor-pointer transition-all duration-300"
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <service.icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-cal text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 font-matter">{service.description}</p>
                  <Link to={service.link} className="flex items-center bg-zinc-900 hover:bg-zinc-800 text-orange-400 px-4 py-2 rounded-full font-matter transition-all duration-300 border border-zinc-800 hover:border-orange-500/50">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flowing Menu Section */}
      <motion.section 
        className="bg-black mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cal text-white mb-8 text-center">
            Explore Our Solutions
          </h2>
          <div className="h-[600px] relative">
            <FlowingMenu items={flowingMenuItems} />
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default ServicesSection;
