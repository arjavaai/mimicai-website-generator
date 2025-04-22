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
Three Atoms is an AI solutions company founded in 2020. We specialize in developing and implementing cutting-edge artificial intelligence solutions for businesses of all sizes. Our goal is to democratize AI technology, making it accessible and practical for businesses across industries.

OUR SERVICES:

1. AI AGENTS:
AI Agents are autonomous software entities powered by artificial intelligence that can perform specific tasks or functions without human intervention. Our custom AI agents can:
- Automate repetitive tasks and workflows
- Provide 24/7 customer service through intelligent chatbots
- Process and analyze data in real-time
- Make decisions based on predefined rules and machine learning
- Integrate with existing business systems and software
We build AI agents tailored to your specific business needs, whether it's customer support, data processing, or internal operations automation.

2. AI WORKFLOWS:
AI Workflows are end-to-end automated processes that leverage artificial intelligence to streamline operations. Our AI workflow solutions:
- Connect multiple systems and data sources
- Automate complex business processes from start to finish
- Reduce manual intervention and human error
- Provide real-time monitoring and analytics
- Scale easily as your business grows
We create custom AI workflows that integrate with your existing infrastructure to maximize efficiency and productivity.

3. LLM FINE-TUNING:
Large Language Model (LLM) Fine-tuning is the process of customizing pre-trained AI models for specific use cases. Our LLM fine-tuning services include:
- Adapting models like GPT to understand industry-specific terminology
- Training on your proprietary data for more relevant outputs
- Optimizing for specific tasks (customer support, content creation, etc.)
- Implementing guardrails and safety measures
- Continuous improvement based on feedback and performance metrics
We help businesses harness the power of large language models with customizations that make them truly effective for your unique needs.

4. RAG IMPLEMENTATION:
Retrieval-Augmented Generation (RAG) is a technique that enhances AI responses by combining the power of language models with information retrieval from your own data. Our RAG implementation services include:
- Building knowledge bases from your documents and data
- Creating efficient retrieval systems for accurate information access
- Integrating retrieval with generation for contextually relevant responses
- Implementing version control and update mechanisms
- Setting up evaluation frameworks to measure accuracy and relevance
We help you leverage your proprietary information to create AI systems that provide accurate, up-to-date, and contextually relevant responses.

5. WEBSITE DEVELOPMENT:
We create modern, responsive websites with integrated AI features that enhance user experience. Our website development services include:
- Custom design and development tailored to your brand
- AI-powered chatbots and virtual assistants
- Personalized user experiences through AI recommendation systems
- Automated content generation and optimization
- Analytics and insights powered by AI
Our websites combine cutting-edge design with powerful AI capabilities to create engaging and effective online presences.

6. CONTENT AUTOMATION:
Our AI Content Automation service helps scale your personal brand with AI-powered content. We clone both your voice AND visual appearance to create consistent, high-quality videos while you focus on what matters most.

How Content Automation Works:
Step 1: Record Base Content - Provide us with 4-5 minute videos that capture your authentic style, voice, and mannerisms.
Step 2: AI Cloning & Production - We use AI to clone both your voice and visual appearance, creating multiple pieces of content that look and sound exactly like you.
Step 3: Distribution & Growth - We handle posting, optimization, and analytics to grow your audience across platforms.

The Result: 10-30× Content Output - Transform a single recording session into weeks of consistent, high-quality content across multiple platforms.

Our Content Automation Package Includes:
- Account Management: We handle all aspects of your content platforms, from setup to optimization.
- Content Research: Identifying trending topics and relevant content ideas for maximum engagement.
- Script Writing: Professional scripts tailored to your voice, style, and audience preferences.
- Video Editing: High-quality editing with graphics, transitions, and visual enhancements.
- Audio & Video Cloning: Advanced AI technology that replicates both your voice and visual appearance for videos that are indistinguishable from ones you record yourself.
- Thumbnail Creation: Eye-catching thumbnails designed to maximize click-through rates.

Pricing Plans:
- Starter: ₹30,000/month for 10 Videos per Month
- Growth: ₹50,000/month for 20 Videos per Month
- Scale: ₹60,000/month for 30 Videos per Month
All plans require a 6-month minimum commitment.

7. AI VIDEO ADS:
We use AI to generate compelling video advertisements that engage audiences and drive conversions. Our AI Video Ads services include:
- Concept development and scriptwriting
- AI-generated visuals and animations
- Voice synthesis and audio production
- Personalization at scale for different audience segments
- Performance tracking and optimization
Our AI-powered video ads help businesses create high-quality marketing content efficiently and cost-effectively.

COMPANY FACTS:
- Founded: 2020
- Projects Completed: 100+
- Happy Clients: 50+
- Global Offices: 3
- Industries Served: Healthcare, Finance, Retail, Manufacturing, Education, and more

OUR TEAM:
- Alex Johnson (CEO & Founder): AI researcher with over 15 years of experience in machine learning and neural networks.
- Sophia Chen (CTO): Former lead engineer at Google AI, specializing in computer vision and deep learning.
- Marcus Williams (Lead AI Architect): Specialist in natural language processing and conversational AI systems.

OUR VALUES:
- Innovation: We continuously push the boundaries of what's possible with AI, always seeking new approaches and solutions.
- Integrity: We are committed to ethical AI practices, ensuring transparency, fairness, and accountability in everything we do.
- Collaboration: We believe in the power of partnership – working closely with our clients to understand their unique challenges.

ACHIEVEMENTS:
- AI Excellence Award 2023: Recognized for our groundbreaking work in developing AI solutions that drive business transformation.
- Forbes AI 30 Under 30: Our founder was recognized in Forbes' prestigious list of young innovators in artificial intelligence.
- 500+ AI Models Deployed: Successfully implemented over 500 AI models across various industries.
- Industry Partnership Program: Launched a collaborative program with leading universities to advance AI research and application.

CONTACT INFORMATION:
- Email: info@threeatoms.com
- Phone: (555) 123-4567
- Address: 123 AI Innovation Street, Tech City, TC 12345
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
            "relative bg-zinc-800/90 backdrop-blur-sm rounded-full border border-zinc-700 shadow-lg",
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {!isExpanded ? (
            // Collapsed state
            <div 
              className="flex items-center gap-2 px-4 py-3 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <MessageCircle size={16} className="text-zinc-400" />
              <span className="text-sm text-zinc-300 font-medium">Ask ThreeAtoms</span>
              <div className="ml-auto">
                <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center">
                  <ChevronUp size={14} className="text-zinc-300" />
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
                  className="w-full border-none bg-transparent text-white pr-10 py-1 text-sm focus:ring-0 focus:outline-none placeholder:text-zinc-400"
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
            className="fixed bottom-0 left-0 right-0 sm:right-6 sm:left-auto z-50 mx-auto sm:mx-0 w-full sm:w-[400px] h-[85vh] sm:h-[500px] bg-zinc-900 border-t sm:border border-zinc-700 sm:rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b border-zinc-700 bg-zinc-800 flex items-center justify-between sticky top-0">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <circle cx="12" cy="12" r="3" fill="#19C37D" />
                  <circle cx="19" cy="12" r="2" fill="#19C37D" opacity="0.6" />
                  <circle cx="5" cy="12" r="2" fill="#19C37D" opacity="0.6" />
                  <circle cx="12" cy="5" r="2" fill="#19C37D" opacity="0.6" />
                  <circle cx="12" cy="19" r="2" fill="#19C37D" opacity="0.6" />
                </svg>
                <h3 className="text-sm font-medium text-white">ThreeAtoms AI</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 bg-zinc-900 overscroll-contain">
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
                        ? "bg-[#19C37D] text-white" 
                        : "bg-zinc-800 text-white"
                    )}
                  >
                    <div className="whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 text-white rounded-lg p-3">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input - ChatGPT Style */}
            <div className="p-3 border-t border-zinc-700 bg-zinc-800 sticky bottom-0">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Message ThreeAtoms AI..."
                  className="w-full bg-zinc-700 border-zinc-600 text-white pr-10 py-3 rounded-md text-sm"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-zinc-600 text-white p-1 h-8 w-8"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-zinc-400 text-center">
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
