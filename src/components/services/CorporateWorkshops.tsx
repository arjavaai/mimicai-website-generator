import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Zap, BarChart, Settings, ArrowRight, FileText, GraduationCap, Building, BookOpen, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CorporateWorkshops = () => {
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
                <span className="text-[#F26E50]">Corporate & College</span> AI Workshops
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Empower your organization or educational institution with cutting-edge AI knowledge through our specialized workshop programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Book a Workshop
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  View Curriculum
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
                        <Building className="w-8 h-8 text-[#F26E50]" />
                        <div>
                          <h3 className="font-bold">Corporate</h3>
                          <p className="text-xs text-gray-400">For businesses</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-[#F26E50]" />
                        <div>
                          <h3 className="font-bold">Academic</h3>
                          <p className="text-xs text-gray-400">For institutions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">AI Fundamentals</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[85%]"></div>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">Practical Applications</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[90%]"></div>
                        </div>
                      </div>
                      
                      <div className="bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <PenTool className="w-4 h-4 text-[#F26E50]" />
                          <span className="text-sm font-medium">Hands-on Training</span>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#F26E50] to-purple-600 w-[95%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center text-sm text-gray-400">
                      Customized workshops for your specific needs
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Workshops</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our workshops are designed to provide practical, hands-on experience with the latest AI technologies, tailored to your organization's specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#F26E50]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#F26E50]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#F26E50]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert-Led Sessions</h3>
              <p className="text-gray-300">
                All workshops are conducted by industry professionals with extensive experience in AI implementation and education.
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#F26E50]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#F26E50]/10 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-[#F26E50]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customized Content</h3>
              <p className="text-gray-300">
                We tailor each workshop to match your organization's industry, technical level, and specific AI implementation goals.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#F26E50]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#F26E50]/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#F26E50]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Application</h3>
              <p className="text-gray-300">
                Focus on real-world applications and hands-on exercises that participants can immediately apply in their work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Workshop Offerings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a variety of workshop formats to meet the needs of different organizations and educational institutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Corporate Workshops */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Building className="w-8 h-8 text-[#F26E50]" />
                  <h3 className="text-2xl font-bold">Corporate Workshops</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Designed for businesses looking to upskill their teams and leverage AI for competitive advantage.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Executive AI Literacy Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Department-Specific AI Implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">AI Strategy Development Workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Technical Team AI Training</span>
                  </li>
                </ul>
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md w-full">
                  Request Corporate Workshop
                </Button>
              </div>
            </motion.div>
            
            {/* Academic Workshops */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="w-8 h-8 text-[#F26E50]" />
                  <h3 className="text-2xl font-bold">College & University Workshops</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Specialized programs for educational institutions to enhance curriculum and prepare students for the AI-driven future.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">AI Fundamentals for Students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Faculty Development Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Research-Focused AI Workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#F26E50]/20 flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-[#F26E50]" />
                      </div>
                    </div>
                    <span className="text-gray-300">Curriculum Integration Support</span>
                  </li>
                </ul>
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md w-full">
                  Request Academic Workshop
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Process Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Workshop Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure our workshops deliver maximum value to your organization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F26E50] rounded-full flex items-center justify-center text-black font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 mt-2">Needs Assessment</h3>
                <p className="text-gray-300">
                  We begin by understanding your organization's specific needs, goals, and current AI capabilities.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F26E50] rounded-full flex items-center justify-center text-black font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 mt-2">Custom Curriculum</h3>
                <p className="text-gray-300">
                  We design a tailored workshop curriculum that addresses your specific challenges and opportunities.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F26E50] rounded-full flex items-center justify-center text-black font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 mt-2">Workshop Delivery</h3>
                <p className="text-gray-300">
                  Our expert facilitators deliver engaging, interactive sessions that combine theory with hands-on practice.
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#F26E50] rounded-full flex items-center justify-center text-black font-bold">4</div>
                <h3 className="text-xl font-bold mb-4 mt-2">Follow-up Support</h3>
                <p className="text-gray-300">
                  We provide ongoing support and resources to help participants apply what they've learned in their work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from organizations that have benefited from our workshop programs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
                  <img src="/lovable-uploads/a1c03d43-3865-4b3e-8b46-b7527e81fbff.png" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-400">CTO, TechInnovate Inc.</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The AI workshop provided by ThreeAtoms was transformative for our development team. The practical, hands-on approach helped us quickly implement AI solutions that have significantly improved our product offerings."
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
                  <img src="/lovable-uploads/50d23781-4daf-4098-a63c-20647a378ade.png" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-400">Dean, School of Computer Science</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The academic workshops provided by ThreeAtoms have been instrumental in helping our faculty integrate AI concepts into their curriculum. Our students are now better prepared for the AI-driven job market."
              </p>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
                  <img src="/lovable-uploads/6d7cd367-1130-48e4-bc8f-c991c8bbb84d.png" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Robert Williams</h4>
                  <p className="text-sm text-gray-400">HR Director, Global Enterprises</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The executive AI literacy program was exactly what our leadership team needed. The workshops demystified AI and helped us develop a strategic approach to implementing AI across our organization."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Empower Your Team with AI Knowledge?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our workshop programs can be tailored to meet your organization's specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 rounded-md text-lg">
                Book a Consultation
              </Button>
              <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-8 py-4 rounded-md text-lg">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWorkshops;
