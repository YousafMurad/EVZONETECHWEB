'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'M1',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in tech innovation.',
    },
    {
      name: 'M2',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b4fd?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about scalable solutions.',
    },
    {
      name: 'M3',
      role: 'Lead QA Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Quality assurance expert ensuring flawless products.',
    }
  ];

  const features = [
    {
      title: 'Who We Are',
      description: 'We are a team of experienced professionals dedicated to delivering high-quality software solutions that meet your business needs.',
      icon: '�'
    },
    {
      title: 'Excellence in Software Quality & Innovation',
      description: 'Our commitment to quality and innovation drives us to create cutting-edge solutions that exceed expectations.',
      icon: '🏆'
    },
    {
      title: 'Our Culture',
      description: 'We foster a collaborative culture where creativity thrives and every team member contributes to our shared success.',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Standardized with home page */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[75vh] md:min-h-[80vh] lg:min-h-[90vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Navbar Spacer */}
        <div className="absolute top-0 w-full h-16 sm:h-20 md:h-24 z-20 bg-gradient-to-b from-black/30 to-transparent"></div>

        {/* Hero Content - Standardized with home page */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto py-8 md:py-6"
          >
            {/* Team Badge Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-5"
            >
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <div className="w-12 md:w-14 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                  <FaUsers className="text-white text-xl md:text-2xl" />
                </div>
                <div className="w-12 md:w-14 h-0.5 bg-gradient-to-l from-transparent to-teal-400"></div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-bold text-white mb-4 md:mb-5 leading-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-teal-200 bg-clip-text text-transparent">
                About
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative"
            >
              <p className="font-light text-gray-300 leading-relaxed mx-auto mb-6 md:mb-8
                text-base sm:text-lg md:text-xl lg:text-2xl"
              >
                We are a <span className="text-teal-400 font-semibold">passionate team</span> of developers, designers, and innovators 
                dedicated to transforming ideas into <span className="text-blue-400 font-semibold">exceptional digital experiences</span>.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#story"
                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <span>Discover Our Story</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group border-2 border-white/30 hover:border-teal-400 hover:bg-teal-400/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Get In Touch</span>
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></div>
                <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Our Journey</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
  Founded in 2020, EvZone Tech was built on a simple belief: technology 
  should not only empower businesses but also deliver consistent quality. 
  What began as a small team of passionate developers has evolved into a 
  full-service digital agency where quality and reliability 
  are the core of everything we do.
</p>

<p>
  Our journey started when we recognized a gap in the market for truly 
  tested and reliable digital solutions. Too many businesses were relying 
  on one-size-fits-all approaches that overlooked performance, security, 
  and long-term sustainability.
</p>

<p>
  Today, we’re proud to have helped more than 100 businesses enhance 
  their digital presence with solutions that are not only innovative, 
  but also rigorously tested for quality, scalability, and performance. 
  Every line of code we deliver goes through a careful QA process.
 
</p>

              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Stats Card */}
                <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl lg:text-5xl font-bold">100+</div>
                      <div className="text-teal-100 font-medium">Projects Completed</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl lg:text-5xl font-bold">50+</div>
                      <div className="text-teal-100 font-medium">Happy Clients</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl lg:text-5xl font-bold">4+</div>
                      <div className="text-teal-100 font-medium">Years Experience</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl lg:text-5xl font-bold">24/7</div>
                      <div className="text-teal-100 font-medium">Support</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Achievement Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl border-4 border-yellow-400"
                >
                  <div className="text-center">
                    <div className="text-2xl">🏆</div>
                    <div className="text-xs font-bold text-gray-800 mt-1">Award Winner</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence in Software Quality & Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Excellence in Software <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Quality & Innovation</span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {/* Who We Are Section - Text Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Who We Are
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded on the principle of precision, efficiency, and continuous improvement, we bring together a blend of technical expertise and business acumen. Our expertise lies in creating seamless challenges. Our expertise spans Quality Assurance, software development, system integration, project management, and digital transformation—ensuring comprehensive solutions that align with your business objectives.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                {/*     <button className="bg-teal-600 hover:bg-white hover:text-black hover:border-teal-600 border border-transparent text-white px-6 py-2 rounded-md font-medium transition-all duration-300">
                    View More
                  </button>
                  */}
                  
                </motion.div>
              </div>
              
              <div className="relative flex justify-center">
                <div className="relative w-72 h-72">
                  {/* Circular background with gradient - decreased from w-80/h-80 to w-72/h-72 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full"></div>
                  
                  {/* Quality Assurance imagery overlay */}
                  <div className="absolute inset-8 bg-black/90 flex items-center justify-center overflow-hidden"
                       style={{
                         clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                         transform: "rotate(5deg)"
                       }}>
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop"
                      alt="Quality Assurance Team"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-8 -left-3 w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Our Mission Section - Image Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative flex justify-center">
                <div className="relative w-72 h-72">
                  {/* Circular background with gradient - decreased from w-80/h-80 to w-72/h-72 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full"></div>
                  
                  {/* Software Development imagery overlay */}
                  <div className="absolute inset-8 bg-black/90 flex items-center justify-center overflow-hidden"
                       style={{
                         clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                         transform: "rotate(-10deg)"
                       }}>
                    <img 
                      src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop"
                      alt="Software Development"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="absolute top-8 -right-3 w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We empower businesses with flawless, scalable software solutions that drive growth and transformation. We specialize in Quality Control - Identifying and addressing software challenges, streamlining functionality, and ensuring applications meet high standards of reliability while maintaining user experience. Our solutions are designed to optimize performance, enhance security, and provide sustainable value.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
         {/*     <button className="bg-teal-600 hover:bg-white hover:text-black hover:border-teal-600 border border-transparent text-white px-6 py-2 rounded-md font-medium transition-all duration-300">
                    View More
                  </button>
                  */}
                  
                </motion.div>
              </div>
            </motion.div>

            {/* Our Culture Section - Text Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Culture
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in continuous learning, innovation, and improvement. Our culture encourages our teams to think outside the box, challenge the status quo, and constantly push the boundaries of what is possible. We believe that the right technology and teamwork create the foundation of all good businesses. We deliver quality.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
             {/*     <button className="bg-teal-600 hover:bg-white hover:text-black hover:border-teal-600 border border-transparent text-white px-6 py-2 rounded-md font-medium transition-all duration-300">
                    View More
                  </button>
                  */}

                </motion.div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-72 h-72">
                  {/* Circular background with gradient - decreased from w-80/h-80 to w-72/h-72 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-full"></div>
                  
                  {/* Team collaboration imagery overlay */}
                  <div className="absolute inset-8 bg-black/90 flex items-center justify-center overflow-hidden"
                       style={{
                         clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                         transform: "rotate(18deg)"
                       }}>
                    <img 
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop"
                      alt="Team Culture and Innovation"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-8 -left-3 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  
{/*}  
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Members</span>
            </h2>
            <div className="w-20 h-1 bg-teal-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="flex justify-center items-end">
            <div className="flex items-end space-x-16 max-w-6xl w-full justify-center">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group ${index === 1 ? 'mb-8' : 'mb-0'}`}
                >
                  <div className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index === 1 ? 'w-80 h-96' : 'w-64 h-80'
                  }`}>
                    <div className="relative h-full">
                      <img 
                        src={`/images/pic${index + 1}.jpg`}
                        alt={member.name}
                        className={`w-full object-cover ${index === 1 ? 'h-72' : 'h-60'}`}
                      />
                      <div className={`absolute bottom-0 left-0 right-0 text-center bg-teal-500 text-white ${
                        index === 1 ? 'py-6 px-4' : 'py-5 px-4'
                      }`}>
                        <h3 className={`font-bold ${index === 1 ? 'text-xl' : 'text-lg'} mb-1`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-teal-100">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>  
      
 */}
                        
      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">Contact</span>
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with us today and let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white hover:bg-white hover:text-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
