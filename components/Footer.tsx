'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setNewsletterStatus('idle');
      setNewsletterError('');
      setAlreadySubscribed(false);
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setEmail('');
        setNewsletterStatus('success');
        setAlreadySubscribed(false);
      } else {
        // Check for duplicate email case (409 status)
        if (response.status === 409) {
          setEmail('');
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
      setIsSubmitting(false);
    }
  };

  const footerSections = {
    'Services': [
      { name: 'QA Testing', href: '/services/qa-testing' },
      { name: 'Automation Testing', href: '/services/automation' },
      { name: 'API Testing', href: '/services/api-testing' },
      { name: 'Mobile Testing', href: '/services/mobile-testing' },
      { name: 'Security Testing', href: '/services/security' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Our Portfolio', href: '/portfolio' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    'Support': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'System Status', href: '/status' },
      { name: 'Report Bug', href: '/report-bug' },
    ],
  };
   {/* social media links are to be added here */}
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', hoverColor: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', hoverColor: 'hover:bg-sky-500' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', hoverColor: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', hoverColor: 'hover:bg-pink-600' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', hoverColor: 'hover:bg-gray-700' }
  ];

  const contactInfo = [
    { icon: FaPhone, text: '+92 (322) 6088 970' },
    { icon: FaEnvelope, text: 'queries@evzonetech.com' }
  ];

  return (
    <>
      {/* Wave Transition */}
      <div className="relative">
        <svg 
          className="w-full h-20 fill-gray-900" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="0.25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity="0.5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>
      
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          {/* Newsletter Section - Hero Style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 mt-16"
          >
            {/* Logo with company name */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <Image 
                  src="/images/logo.png" 
                  alt="EvZone Tech Logo" 
                  width={60}
                  height={60}
                  className="h-14 w-auto object-contain"
                  priority
                />
                <div className="text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-300 via-white to-green-300 bg-clip-text text-transparent">
                    EVZONE TECH
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-300 via-green-300 to-teal-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers and businesses who trust EvZone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-teal-400 to-green-400 hover:from-teal-500 hover:to-green-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 border border-teal-300/30 w-full sm:w-auto justify-center"
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/portfolio"
                className="border-2 border-teal-400/50 hover:border-teal-400 text-teal-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 bg-teal-500/10 hover:bg-teal-500/20 backdrop-blur-sm w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
            </div>
            
            {/* Newsletter */}
            <div className="max-w-sm sm:max-w-md mx-auto">
              <p className="text-teal-300 mb-4 font-medium">Get QA insights delivered weekly</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row bg-gray-800/30 backdrop-blur-md rounded-2xl p-2 border border-teal-500/30 shadow-xl gap-2 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-3 sm:py-2 text-white placeholder-teal-300/70 focus:outline-none rounded-lg sm:rounded-none"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-teal-400 to-green-400 hover:from-teal-500 hover:to-green-500 text-gray-900 px-6 py-3 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center font-semibold whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
              
              {/* Newsletter confirmation messages - with fixed height to prevent layout shift */}
              <div className="h-10 mt-3">
                {newsletterStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-teal-500/20 backdrop-blur-sm rounded-lg py-2 px-3 text-white text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>
                        {alreadySubscribed 
                          ? "Already subscribed. Thank you!" 
                          : "Thanks for subscribing!"}
                      </span>
                    </div>
                  </motion.div>
                )}
                
                {newsletterStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-red-500/20 backdrop-blur-sm rounded-lg py-2 px-3 text-white text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{newsletterError || 'Please try again'}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid - Updated from 4 to 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Company - Now first column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Company</span>
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Privacy Policy', href: '/privacy' }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info - Now second column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Connect</span>
              </h4>
              <div className="space-y-4">
                {contactInfo.slice(0, 3).map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm">
                    <info.icon className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{info.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media - Now third column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Follow Us</span>
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:border-transparent hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Join our community of developers and QA professionals
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 pb-5">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 md:space-x-8" // Increased spacing
              >
                <p className="text-gray-400 text-sm px-2"> 
                  © {currentYear} Evzone Tech.
                </p>
                
                <div className="h-4 w-px bg-gray-700 hidden sm:block"></div> {/* Divider */}
                
                <p className="text-gray-400 text-sm px-2"> 
                  All rights reserved.
                </p>
                
                <div className="hidden md:flex items-center space-x-3 text-xs text-gray-500 ml-2"> 
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>All systems operational</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                {[
                  { name: 'Privacy', href: '/privacy' }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
