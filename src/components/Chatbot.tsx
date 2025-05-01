import { useState, useRef, useEffect } from 'react';
import { ArrowUp, Loader2, X, MessageCircle, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { setChatbotState } from './FloatingProgressBar';

// Define message types
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Website context for the AI
const websiteContext = `
ABOUT THREE ATOMS:
Three Atoms is an AI solutions company founded in 2025. We specialize in developing and implementing cutting-edge artificial intelligence solutions for businesses of all sizes. Our mission is to democratize AI technology, making it accessible and practical for businesses across industries. What began as a collaborative venture has rapidly evolved into a comprehensive AI solutions provider, helping businesses leverage cutting-edge AI technologies to solve complex problems, enhance customer experiences, and drive sustainable growth in the digital age.

OUR ACHIEVEMENTS:
- 50+ Web Applications Built: Created a portfolio of 50+ web applications, with 10 fully AI-powered tools and products
- AI Consulting Excellence: Our members are actively serving as AI consultants at Invest4Edu
- 100K+ Social Media Following: Built a strong presence in AI-focused content creation
- Automated Content Creation: Successfully automated Instagram content creation processes using AI

OUR SERVICES:

1. AI AGENTS:
AI Agents are autonomous software entities powered by artificial intelligence that can perform specific tasks or functions without human intervention. Our custom AI agents can:
- Automate repetitive tasks and workflows
- Provide 24/7 customer service through intelligent chatbots
- Process and analyze data in real-time
- Make decisions based on predefined rules and machine learning
- Integrate with existing business systems and software

Our Implementation Process:
- Discovery & Planning: We analyze your business needs and identify opportunities for AI agent implementation
- Agent Design: We design the agent's capabilities, knowledge base, and integration points
- Development & Training: We develop and train the agent using your data and business rules
- Deployment & Optimization: We deploy the agent and continuously optimize its performance based on feedback

2. AI WORKFLOWS:
AI Workflows are end-to-end automated processes that leverage artificial intelligence to streamline operations. Our AI workflow solutions:
- Connect multiple systems and data sources
- Automate complex business processes from start to finish
- Reduce manual intervention and human error
- Provide real-time monitoring and analytics
- Scale easily as your business grows

3. CONTENT AUTOMATION:
Our AI Content Automation service helps scale your personal brand with AI-powered content. We clone both your voice AND visual appearance to create consistent, high-quality videos while you focus on what matters most.

How Content Automation Works:
- Step 1: Record Base Content - Provide us with 4-5 minute videos that capture your authentic style, voice, and mannerisms
- Step 2: AI Cloning & Production - We use AI to clone both your voice and visual appearance, creating multiple pieces of content
- Step 3: Distribution & Growth - We handle posting, optimization, and analytics to grow your audience across platforms

The Result: 10-30× Content Output - Transform a single recording session into weeks of consistent, high-quality content.

Our Content Automation Package Includes:
- Account Management and Content Research
- Script Writing and Professional Editing
- Voice & Video Cloning
- Custom Thumbnails

Pricing Plans:
- Starter: ₹30,000/month for 10 Videos per Month
- Growth: ₹50,000/month for 20 Videos per Month
- Scale: ₹60,000/month for 30 Videos per Month

4. WEBSITE DEVELOPMENT:
We create modern, responsive websites with integrated AI features that enhance user experience. Our website development services include:
- Custom design and development tailored to your brand
- AI-powered chatbots and virtual assistants
- Personalized user experiences through AI recommendation systems
- Automated content generation and optimization
- Analytics and insights powered by AI

Types of websites we develop:
- Corporate Sites
- E-commerce Platforms
- Educational Portals
- Real Estate Websites
- AI-Integrated Web Applications

Each website is custom-built with responsive design, SEO optimization, and performance in mind.

5. AI VIDEO ADS:
We use AI to generate compelling video advertisements that engage audiences and drive conversions. Our AI Video Ads services include:
- Concept development and scriptwriting
- AI-generated visuals and animations
- Voice synthesis and audio production
- Personalization at scale for different audience segments
- Performance tracking and optimization

Our AI-powered video ads help businesses create high-quality marketing content efficiently and cost-effectively.

6. CORPORATE/COLLEGE WORKSHOPS:
We offer specialized workshops on AI technologies and implementation for both corporate teams and educational institutions. Our workshops provide hands-on experience and practical knowledge that participants can immediately apply.

FREQUENTLY ASKED QUESTIONS:

Q: How can AI Agents help streamline my business operations?
A: Our custom AI Agents can automate repetitive tasks, enhance customer service through intelligent chatbots, process data in real-time, make decisions based on predefined rules, and integrate with your existing business systems. They're tailored to your specific needs, whether for customer support, data processing, or internal operations, helping you save time and resources while improving efficiency.

Q: What makes Three Atoms' Content Automation service unique?
A: Our AI Content Automation service clones both your voice AND visual appearance to create consistent, high-quality videos while you focus on what matters most. We handle the entire process from content research and scriptwriting to voice synthesis and video production, allowing you to transform a single recording session into weeks of content across multiple platforms—effectively scaling your personal brand with minimal time investment.

Q: What types of websites can Three Atoms develop?
A: We develop a wide range of websites including corporate sites, e-commerce platforms, educational portals, real estate websites, and AI-integrated web applications. Each website is custom-built with responsive design, SEO optimization, and performance in mind. We also offer AI enhancements like chatbots, personalized user experiences, and automated content generation to make your website stand out from competitors.

Q: Do you offer ongoing support after implementing AI solutions?
A: Yes, we provide comprehensive ongoing support for all our AI implementations. This includes regular maintenance, performance monitoring, updates to adapt to changing business needs, and technical support from our expert team. We also offer training for your staff to maximize the benefits of the AI solutions and can continuously optimize the systems based on feedback and performance metrics to ensure long-term success.

CONTACT INFORMATION:
- Email: contact@threeatoms.com, threeatoms.com@gmail.com
- Phone: +91 7396149081 (Monday-Friday, 9am-6pm ET)
- Website: https://threeatoms.com
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Welcome to Three Atoms! 👋

I'm your AI assistant and can help you learn about:
• Our AI services and solutions
• Our team and company background
• Our achievements and values

How can I assist you today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isExpanded]);

  // Update FloatingProgressBar visibility when chatbot state changes
  useEffect(() => {
    setChatbotState(isOpen);
  }, [isOpen]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Check if API key is set
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        throw new Error('API key not configured');
      }
      
      // Call Gemini API
      const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are an AI assistant for the Three Atoms company website. Your name is ThreeAtoms AI. Answer questions based on this context about our company:

${websiteContext}

If the question cannot be answered based on the context, politely say you don't have that specific information but offer to help with something else related to Three Atoms.

Format your responses using these guidelines:
1. Use bullet points (•) for lists instead of asterisks or dashes
2. Use line breaks to separate paragraphs
3. Keep responses concise and focused
4. Avoid using markdown formatting like *asterisks* for emphasis

User question: ${input}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
      
      // Extract the response text
      const assistantResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm sorry, I couldn't process your request. Please try again.";
      
      // Add assistant message
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      // Provide a specific message for API key issues
      if (error.message === 'API key not configured') {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I can't connect to my knowledge base because the API key is not configured. Please add your Gemini API key to the .env file. Check the CHATBOT_README.md file for instructions." 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'm sorry, I encountered an error connecting to my knowledge base. Please check your API key or try again later." 
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format messages with basic HTML
  const formatMessage = (text: string) => {
    // Replace line breaks with <br>
    let formattedText = text.replace(/\n/g, '<br>');
    
    // Replace markdown-style lists with HTML lists
    formattedText = formattedText.replace(/^- (.+)$/gm, '• $1');
    
    // Replace markdown-style bold with HTML bold
    formattedText = formattedText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Replace markdown-style italic with HTML italic
    formattedText = formattedText.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    return formattedText;
  };

  return (
    <>
      {/* Centered ChatGPT-style floating input bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
        <motion.div
          initial={{ width: "200px" }}
          animate={{ width: isExpanded ? "min(600px, 95vw)" : "200px" }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => !input && setIsExpanded(false)}
          className={cn(
            "relative bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {!isExpanded ? (
            // Collapsed state
            <div 
              className="flex items-center gap-2 px-4 py-3 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <MessageCircle size={16} className="text-[#F26E50]" />
              <span className="text-sm text-white font-medium drop-shadow-sm">Ask ThreeAtoms</span>
              <div className="ml-auto">
                <div className="w-6 h-6 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                  <ChevronUp size={14} className="text-white" />
                </div>
              </div>
            </div>
          ) : (
            // Expanded state
            <div className="flex items-center px-3 py-2">
              <div className="relative flex-1">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && input.trim()) {
                      e.preventDefault();
                      setIsOpen(true);
                      setIsExpanded(false);
                      handleSendMessage();
                    }
                  }}
                  placeholder="Message ThreeAtoms AI..."
                  className="w-full border-none bg-transparent text-white pr-10 py-1 text-sm focus:ring-0 focus:outline-none placeholder:text-white/60"
                />
                <Button 
                  onClick={() => {
                    if (input.trim()) {
                      setIsOpen(true);
                      setIsExpanded(false);
                      handleSendMessage();
                    }
                  }}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-zinc-700 text-white p-1 h-8 w-8 rounded-full"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 sm:right-6 sm:left-auto z-50 mx-auto sm:mx-0 w-full sm:w-[400px] h-[85vh] sm:h-[500px] bg-white/10 backdrop-blur-lg border border-white/20 sm:rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b border-white/20 bg-white/10 backdrop-blur-lg flex items-center justify-between sticky top-0">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <circle cx="12" cy="12" r="3" fill="#F26E50" />
                  <circle cx="19" cy="12" r="2" fill="#F26E50" opacity="0.6" />
                  <circle cx="5" cy="12" r="2" fill="#F26E50" opacity="0.6" />
                  <circle cx="12" cy="5" r="2" fill="#F26E50" opacity="0.6" />
                  <circle cx="12" cy="19" r="2" fill="#F26E50" opacity="0.6" />
                </svg>
                <h3 className="text-sm font-medium text-white drop-shadow-sm">ThreeAtoms AI</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 bg-transparent overscroll-contain">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex",
                    message.role === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div 
                    className={cn(
                      "max-w-[85%] rounded-lg p-3",
                      message.role === 'user' 
                        ? "bg-[#F26E50] text-white shadow-sm" 
                        : "bg-white/20 backdrop-blur-sm text-white border border-white/10 shadow-sm"
                    )}
                  >
                    <div className="whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-lg p-3 shadow-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-[#F26E50]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input - Glass Style */}
            <div className="p-3 border-t border-white/20 bg-white/10 backdrop-blur-lg sticky bottom-0">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Message ThreeAtoms AI..."
                  className="w-full bg-white/10 border-white/20 text-white pr-10 py-3 rounded-full text-sm focus:border-[#F26E50]/50 focus:ring-[#F26E50]/30"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#F26E50] hover:bg-[#E05D40] text-white p-1 h-8 w-8 rounded-full transition-colors"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-white/60 text-center">
                ThreeAtoms AI can make mistakes. Consider checking important information.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
