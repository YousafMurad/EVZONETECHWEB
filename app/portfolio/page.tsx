'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaBriefcase } from 'react-icons/fa';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS'];
  
  // Skills data from the Figma design
  const skills = [
    { name: 'HTML', percentage: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', percentage: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 88, color: 'from-yellow-500 to-yellow-600' },
    { name: 'React', percentage: 92, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Node.js', percentage: 87, color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', percentage: 83, color: 'from-emerald-500 to-emerald-600' },
    { name: 'TypeScript', percentage: 89, color: 'from-blue-600 to-blue-700' },
    { name: 'Next.js', percentage: 91, color: 'from-gray-700 to-gray-800' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Fiskl Financial Platform',
      description: 'Modern financial management platform with advanced analytics and real-time reporting capabilities.',
      category: 'SaaS',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      image: '/project-1.jpg',
      liveUrl: 'https://fiskl.com',
      githubUrl: 'https://github.com/evzonetech/fiskl',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Marketplace',
      description: 'Full-featured e-commerce platform with multi-vendor support, payment integration, and admin dashboard.',
      category: 'E-commerce',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      image: '/project-2.jpg',
      liveUrl: 'https://marketplace.com',
      githubUrl: 'https://github.com/evzonetech/marketplace',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced filtering.',
      category: 'SaaS',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      image: '/project-3.jpg',
      liveUrl: 'https://taskmanager.com',
      githubUrl: 'https://github.com/evzonetech/taskmanager',
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      description: 'Mobile application for healthcare providers with patient management and telemedicine features.',
      category: 'Mobile Apps',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
      image: '/project-4.jpg',
      liveUrl: 'https://healthapp.com',
      githubUrl: 'https://github.com/evzonetech/healthapp',
      featured: false
    },
    {
      id: 5,
      title: 'Corporate Website',
      description: 'Professional corporate website with CMS integration, SEO optimization, and responsive design.',
      category: 'Web Development',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
      image: '/project-5.jpg',
      liveUrl: 'https://corporate.com',
      githubUrl: 'https://github.com/evzonetech/corporate',
      featured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, student progress tracking, and interactive learning tools.',
      category: 'SaaS',
      technologies: ['React', 'Express.js', 'MySQL', 'Redis'],
      image: '/project-6.jpg',
      liveUrl: 'https://lms.com',
      githubUrl: 'https://github.com/evzonetech/lms',
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            {/* Portfolio Badge Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-5"
            >
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <div className="w-12 md:w-14 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-xl md:text-2xl" />
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
                Our
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
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
                Explore our collection of <span className="text-teal-400 font-semibold">successful projects</span> that showcase our expertise 
                in creating <span className="text-blue-400 font-semibold">innovative digital solutions</span> across various industries.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#projects"
                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <span>View Projects</span>
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
                    <span>Start Your Project</span>
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

      {/* Skills Section from Figma Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Technical <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team possesses deep expertise across modern technologies and frameworks, 
              enabling us to deliver cutting-edge solutions for your projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                    alt="Development workspace"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section id="projects" className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeFilter === 'All' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Featured <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our most impactful and innovative solutions
              </p>
            </motion.div>

            <div className="space-y-20">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="bg-gradient-to-br from-teal-500 to-purple-600 rounded-2xl h-80 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <div className="flex space-x-4 justify-center">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                              Live Demo
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-teal-600 transition-colors duration-200"
                            >
                              View Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid - Fixed for mobile */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {activeFilter === 'All' ? (
                <>All <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Projects</span></>
              ) : (
                <><span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">{activeFilter}</span> Projects</>
              )}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-teal-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4 max-w-full">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-600 hover:bg-teal-700 text-white text-center px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 hover:border-teal-600 hover:text-teal-600 text-gray-700 text-center px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Ready to Start Your <span className="bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise 
              and innovative approach to digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
