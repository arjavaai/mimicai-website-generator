import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-threeAtoms-black text-white pt-28">
      <SEO 
        title="About ThreeAtoms | Our AI Expertise & Team"
        description="Learn about ThreeAtoms, our mission, team, and how we help businesses implement AI solutions to transform operations and drive growth."
        keywords="about ThreeAtoms, AI expertise, AI team, artificial intelligence company, technology leaders, AI consultants"
        url="https://threeatoms.com/about"
        canonical="https://threeatoms.com/about/"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ThreeAtoms</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a team of AI specialists dedicated to transforming businesses through innovative solutions.
          </p>
        </div>
        
        {/* Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="our mission.png" 
              alt="Our Mission" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At ThreeAtoms, our mission is to make advanced AI solutions accessible and practical for businesses of all sizes. We bridge the gap between cutting-edge AI technology and real-world business applications, delivering solutions that create measurable value and competitive advantage.
            </p>
            <p className="text-gray-300 mb-6">
              We're committed to demystifying AI and empowering organizations to harness its transformative potential. Through our expertise in generative AI, machine learning, and content automation, we help businesses innovate, optimize operations, and deliver exceptional customer experiences.
            </p>
            <Button 
              asChild
              className="w-fit rounded-full bg-threeAtoms-orange hover:bg-threeAtoms-orange/90 text-white group"
            >
              <a href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2025, ThreeAtoms emerged from a shared vision to democratize AI technology for businesses of all sizes. Our founders, with their diverse expertise in GenAI, machine learning, and digital marketing, recognized the immense potential of AI to transform businesses but saw that many organizations struggled to implement it effectively.
            </p>
            <p className="text-gray-300 mb-6">
              What began as a collaborative venture has rapidly evolved into a comprehensive AI solutions provider. We're proud to help businesses across industries leverage cutting-edge AI technologies to solve complex problems, enhance customer experiences, and drive sustainable growth in the digital age.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">50+</p>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">30+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">3</p>
                <p className="text-sm text-gray-300">Team Members</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="our story.png" 
              alt="Our Story" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="jayanth.jpg" 
                alt="Jayanth Atipamula" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jayanth Atipamula</h3>
                <p className="text-threeAtoms-orange mb-4">CEO & Founder</p>
                <p className="text-gray-300">
                  GenAI Developer and Meta ADS Expert with a passion for innovative AI solutions.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="vamshi.png" 
                alt="Vamshi Sudula" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Vamshi Sudula</h3>
                <p className="text-threeAtoms-orange mb-4">CTO & Co-founder</p>
                <p className="text-gray-300">
                  AI & GenAI Specialist, AI Tutor, PAN India GenAI Buildathon Winner, Machine Learning & Data Science Expert.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="arthisha.jpg" 
                alt="Arthisha Doma" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Arthisha Doma</h3>
                <p className="text-threeAtoms-orange mb-4">CMO & Co-founder</p>
                <p className="text-gray-300">
                  AI Tutor, Content Creation Expert, AI Tools Specialist, and Social Media Management Professional.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center relative overflow-hidden"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              Our Values
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 relative overflow-hidden flex flex-col h-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mr-3">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
              </div>
              <p className="text-gray-300 mt-0">
                We continuously push the boundaries of what's possible with AI, always seeking new approaches and solutions.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 relative overflow-hidden flex flex-col h-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mr-3">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
              </div>
              <p className="text-gray-300 mt-0">
                We are committed to ethical AI practices, ensuring transparency, fairness, and accountability in everything we do.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 relative overflow-hidden flex flex-col h-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mr-3">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
              </div>
              <p className="text-gray-300 mt-0">
                We believe in the power of partnership – working closely with our clients to understand their unique challenges.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Our Achievements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center relative overflow-hidden"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              Our Achievements
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement 1 */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 flex relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GenAI Buildathon Winner</h3>
                <p className="text-gray-300 m-0">
                Recognized as a 100xEngineers Buildathon Winner in India's First GenAI Buildathon competing against 1,500+ participants.

                </p>
              </div>
            </motion.div>
            
            {/* Achievement 2 */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 flex relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 6, 
                      delay: 1,
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Thumbnails Labs</h3>
                <p className="text-gray-300 m-0">
                Built a platform revolutionizing content creation by enabling creators to generate eye-catching thumbnails that drive engagement across YouTube and Instagram.
                </p>
              </div>
            </motion.div>
            
            {/* Achievement 3 */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 flex relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 6, 
                      delay: 2,
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">AI-Powered Products & Consulting Excellence</h3>
                <p className="text-gray-300 m-0">
                Built a portfolio of 50+ web applications, with 10 fully AI-powered tools and products. Our members are also actively serving as AI consultants at Invest4Edu, helping drive innovation in AI adoption.
                </p>
              </div>
            </motion.div>
            
            {/* Achievement 4 */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 119, 0, 0.2)" }}
              className="p-6 bg-gradient-to-b from-threeAtoms-darkgray to-black/80 rounded-lg border border-white/10 flex relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-threeAtoms-orange/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 6, 
                      delay: 3,
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                    className="w-5 h-5 rounded-full bg-threeAtoms-orange"
                  ></motion.div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">AI-Powered Content Creation</h3>
                <p className="text-gray-300 m-0">
                Built a strong presence in AI-focused content creation, with our members amassing 100K+ followers on Instagram. Additionally, we have successfully automated the Instagram content creation process using AI, streamlining engagement and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <div className="mb-20 bg-gradient-to-r from-threeAtoms-orange/20 to-threeAtoms-darkgray p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our AI solutions can address your unique challenges and drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="rounded-full bg-threeAtoms-orange hover:bg-threeAtoms-orange/90 text-white group"
            >
              <a href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
