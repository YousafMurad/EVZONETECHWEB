'use client';

import ContactReCaptcha from '@/components/ContactReCaptcha';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactFormWithReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Web Development',
    priority: 'Standard',
    projectScope: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.fullName.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your full name');
      return;
    }
    
    if (!formData.email.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    if (!formData.projectScope.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please provide project details');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setErrorMessage('');
      
      let recaptchaToken = "no-recaptcha";
      
      // Only try to get recaptcha token if the function is available
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form');
        } catch (err) {
          console.error('reCAPTCHA error:', err);
          // Continue without reCAPTCHA
        }
      }
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          projectType: 'Web Development',
          priority: 'Standard',
          projectScope: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      setNewsletterStatus('error');
      setNewsletterError('reCAPTCHA not available. Please try again later.');
      return;
    }
    
    try {
      setIsNewsletterSubmitting(true);
      setNewsletterStatus('idle');
      setNewsletterError('');
      setAlreadySubscribed(false);
      
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('newsletter_form');
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: newsletterEmail,
          recaptchaToken
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setNewsletterEmail('');
        setNewsletterStatus('success');
        setAlreadySubscribed(false);
      } else {
        // Check for duplicate email case
        if (response.status === 409) {
          // Still show success message for already subscribed emails
          // This prevents email harvesting while giving good user experience
          setNewsletterEmail('');
          setNewsletterStatus('success');
          setAlreadySubscribed(true);
        } else {
          setNewsletterStatus('error');
          setNewsletterError(result.error || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus('error');
      setNewsletterError('Network error. Please check your connection and try again.');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

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
            {/* Contact Badge Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-5"
            >
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <div className="w-12 md:w-14 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl md:text-2xl" />
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
                Get In
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Touch
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
                Whether you're around the corner or around the world, we're always ready to collaborate with you to bring 
                <span className="text-teal-400 font-semibold"> extraordinary ideas</span> to <span className="text-blue-400 font-semibold">life</span>.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact-form"
                    className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <span>Start Conversation</span>
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
                    href="#map"
                    className="group border-2 border-white/30 hover:border-teal-400 hover:bg-teal-400/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Find Us</span>
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* World Map Section - Adjusted map size */}
      <section id="map" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
              <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">Our Global Reach</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Let's <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wherever you are in the world, we're here to help bring your vision to life with our expert team and innovative solutions.
            </p>
          </motion.div>

          {/* World Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-12 md:mb-16"
          >
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
              <div className="relative w-full h-auto aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={`/images/pakistan-map.png`}
                  alt="World Map"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80";
                  }}
                />
              </div>
              
              {/* Simple Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">6</div>
                  <div className="text-sm text-gray-600">Global Centers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Presence</h3>
              <p className="text-gray-600">Operating across 6 continents with dedicated QA centers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">+92 (322) 6088 970</h3>
              <p className="text-gray-600">Available 24/7 for immediate support</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">Focused on effectiveness and reliability</p>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-4 mt-12">
            <a href="#" className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Updated to match screenshot with 2-column layout */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Turn <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Your Idea Into Reality</span>
                </h2>
                <p className="text-lg text-gray-300">
                  If you have any questions or are interested in learning more about our services, please don't hesitate to contact us. You can reach us using the contact form, or directly through the provided email or phone number.
                </p>
                <p className="text-lg text-gray-300">
                  Thank you for considering our company for your design and development needs!
                </p>
                
                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <FaEnvelope className="text-teal-400" />
                    </div>
                    <span className="text-white">queries@evzonetech.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <FaPhone className="text-teal-400" />
                    </div>
                    <span className="text-white">+92 (322) 6088 970</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 ${
                          submitStatus === 'error' && !formData.fullName.trim() 
                            ? 'ring-2 ring-red-400 focus:ring-red-400' 
                            : 'focus:ring-teal-400'
                        } focus:outline-none bg-white/10 backdrop-blur-md text-white`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 ${
                          submitStatus === 'error' && (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
                            ? 'ring-2 ring-red-400 focus:ring-red-400' 
                            : 'focus:ring-teal-400'
                        } focus:outline-none bg-white/10 backdrop-blur-md text-white`}
                      />
                    </div>
                  </div>

                  {/* Project Type Selection Cards */}
                  <div>
                    <label className="block text-gray-300 mb-3">Project Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { value: 'Web Development', icon: '🌐', label: 'Web' },
                        { value: 'Mobile App', icon: '📱', label: 'Mobile' },
                        { value: 'QA Services', icon: '✓', label: 'QA' },
                        { value: 'Other', icon: '🔄', label: 'Other' }
                      ].map((option) => (
                        <div 
                          key={option.value}
                          onClick={() => setFormData({...formData, projectType: option.value})}
                          className={`cursor-pointer rounded-lg p-3 text-center transition-all duration-200 ${
                            formData.projectType === option.value 
                              ? 'bg-teal-500 text-white ring-2 ring-teal-300 shadow-lg' 
                              : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          <div className="text-xl mb-1">{option.icon}</div>
                          <div className="text-sm font-medium">{option.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Priority */}
                  <div>
                    <label className="block text-gray-300 mb-3">Project Priority</label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: 'Standard', color: 'border-blue-400', activeColor: 'bg-blue-500', label: 'Standard' },
                        { value: 'Express', color: 'border-teal-400', activeColor: 'bg-teal-500', label: 'Express' },
                        { value: 'Urgent', color: 'border-orange-400', activeColor: 'bg-orange-500', label: 'Urgent' }
                      ].map((option) => (
                        <div 
                          key={option.value}
                          onClick={() => setFormData({...formData, priority: option.value})}
                          className={`cursor-pointer px-5 py-2 rounded-full border-2 transition-all duration-200 flex-1 text-center ${
                            formData.priority === option.value 
                              ? `${option.activeColor} text-white border-transparent` 
                              : `bg-transparent ${option.color} text-gray-300 hover:bg-white/10`
                          }`}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectScope" className="block text-gray-300 mb-2">Project Details</label>
                    <textarea
                      id="projectScope"
                      name="projectScope"
                      placeholder="Please describe your project requirements, goals, and any specific features you'd like to include."
                      value={formData.projectScope}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={1000}
                      className={`w-full px-4 py-3 rounded-lg border-0 focus:ring-2 ${
                        submitStatus === 'error' && !formData.projectScope.trim() 
                          ? 'ring-2 ring-red-400 focus:ring-red-400' 
                          : 'focus:ring-teal-400'
                      } focus:outline-none resize-none bg-white/10 backdrop-blur-md text-white`}
                    />
                    <div className="text-xs text-gray-400 mt-2 text-right">Maximum 1000 characters</div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'SUBMIT PROJECT INQUIRY'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-center text-white bg-green-500 bg-opacity-20 p-4 rounded-lg">
                      Thank you! Your project inquiry has been submitted successfully. We'll be in touch shortly.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-center text-white bg-red-500 bg-opacity-20 p-4 rounded-lg">
                      {errorMessage || 'Sorry, there was an error submitting your inquiry. Please try again or contact us directly.'}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                We're Here to <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Answer</span>
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or need more information? We're just a message away and would love to hear from you.
              </p>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-teal-500 rounded-2xl p-8 text-white"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-black to-blue-700 bg-clip-text text-transparent">Stay in Touch</span>
                </h3>
                <p className="opacity-90">
                  Subscribe to receive the latest news and updates about our services.
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  disabled={isNewsletterSubmitting}
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 bg-white disabled:bg-gray-100 disabled:text-gray-400 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className={`bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                    isNewsletterSubmitting ? 'bg-opacity-80 cursor-not-allowed' : 'hover:bg-red-600 hover:text-white hover:shadow-lg hover:border-transparent'
                  }`}
                >
                  {isNewsletterSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                  {isNewsletterSubmitting && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-teal-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "linear" }}
                    />
                  )}
                </button>
              </form>
              
              {/* Newsletter submission feedback messages */}
              {newsletterStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-black bg-opacity-20 rounded-lg p-3 text-white text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span>
                      {alreadySubscribed 
                        ? "This email is already subscribed to our website. Thank you for your continued interest!" 
                        : "Thank you! You've been subscribed to our website."}
                    </span>
                  </div>
                </motion.div>
              )}
              
              {newsletterStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-red-500 bg-opacity-20 rounded-lg p-3 text-white text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{newsletterError || 'Something went wrong. Please try again.'}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 text-xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Main Office</h3>
                  <p className="text-gray-600">
                    Islamabad, Pakistan
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 text-xl">📞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">
                    +92 (322) 6088 970<br />
                    Available 24/7
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 text-xl">✉️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    queries@evzonetech.com<br />
                    contact@evzonetech.com
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <ContactReCaptcha>
      <ContactFormWithReCaptcha />
    </ContactReCaptcha>
  );
};

export default ContactPage;
