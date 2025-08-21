'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaEye, FaHandPaper, FaCookieBite, FaGlobe, FaFileContract, FaEnvelope, FaPhone } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: FaEye,
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include:
      
      • Personal information (name, email address, phone number)
      • Professional information (company name, job title)
      • Technical information (IP address, browser type, device information)
      • Usage data (how you interact with our services)
      • Communication preferences and feedback`
    },
    {
      title: 'How We Use Your Information',
      icon: FaUserShield,
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send technical notices, updates, security alerts, and support messages
      • Respond to your comments, questions, and customer service requests
      • Communicate with you about products, services, offers, and events
      • Monitor and analyze trends, usage, and activities in connection with our services
      • Personalize and improve your experience`
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: FaHandPaper,
      content: `We may share your information in the following circumstances:
      
      • With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf
      • In response to a request for information if we believe disclosure is in accordance with applicable law
      • If we believe your actions are inconsistent with our user agreements or policies
      • To protect the rights, property, and safety of EvZone Tech or others
      • In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition`
    },
    {
      title: 'Data Security',
      icon: FaLock,
      content: `We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. These measures include:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication measures
      • Employee training on data protection practices
      • Incident response procedures`
    },
    {
      title: 'Your Rights and Choices',
      icon: FaFileContract,
      content: `You have certain rights regarding your personal information:
      
      • Access: You can request access to your personal information
      • Correction: You can request correction of inaccurate information
      • Deletion: You can request deletion of your personal information
      • Portability: You can request a copy of your data in a structured format
      • Objection: You can object to certain processing of your information
      • Restriction: You can request restriction of processing in certain circumstances`
    },
    {
      title: 'Cookies and Tracking Technologies',
      icon: FaCookieBite,
      content: `We use cookies and similar tracking technologies to collect and track information about your use of our services. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, some parts of our services may not function properly without cookies.`
    },
    {
      title: 'International Data Transfers',
      icon: FaGlobe,
      content: `Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We will take appropriate measures to ensure your information receives adequate protection.`
    },
    {
      title: 'Changes to This Privacy Policy',
      icon: FaShieldAlt,
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy policy periodically for any changes.`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Standardized with home page */}
      <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[75vh] md:min-h-[80vh] lg:min-h-[90vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
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
            {/* Privacy Shield Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 md:mb-5"
            >
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <div className="w-12 md:w-14 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-white text-xl md:text-2xl" />
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
                Privacy
              </span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Policy
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
                Your privacy is our <span className="text-teal-400 font-semibold">top priority</span>. 
                We're committed to protecting your data with <span className="text-blue-400 font-semibold">enterprise-grade security</span>.
              </p>
              
              {/* Security Badges - Keep this unique content */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2"
                >
                  <FaLock className="text-teal-400" />
                  <span className="text-sm text-gray-300">256-bit Encryption</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2"
                >
                  <FaShieldAlt className="text-blue-400" />
                  <span className="text-sm text-gray-300">GDPR Compliant</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2"
                >
                  <FaUserShield className="text-green-400" />
                  <span className="text-sm text-gray-300">SOC 2 Certified</span>
                </motion.div>
              </div>
              
              {/* Last Updated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30"
              >
                <p className="text-sm text-gray-300">Last updated: <span className="text-teal-400 font-semibold">{lastUpdated}</span></p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white/95 backdrop-blur-sm py-8 border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-teal-100 hover:text-teal-700 rounded-full transition-all duration-200 hover:shadow-md"
                >
                  <IconComponent className="text-xs" />
                  <span>{section.title}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Privacy Promise Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 mb-12 text-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Data Protection</h3>
                  <p className="text-sm text-teal-100">Your data is encrypted and secure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUserShield className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Privacy First</h3>
                  <p className="text-sm text-teal-100">We never sell your personal information</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLock className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Full Control</h3>
                  <p className="text-sm text-teal-100">You control your data preferences</p>
                </div>
              </div>
            </motion.div>

            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-teal-500"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    Your Privacy Matters to Us
                  </h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4 leading-relaxed">
                      At EvZone Tech, we understand that your privacy is fundamental to your trust in our services. 
                      This Privacy Policy outlines our commitment to protecting your personal information and 
                      explains how we collect, use, and safeguard your data in accordance with the highest industry standards.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      We believe in transparency and want you to understand exactly how your information is handled. 
                      Our privacy practices are designed to give you control over your personal data while enabling 
                      us to provide you with the best possible service experience.
                    </p>
                    <p className="leading-relaxed">
                      This policy is regularly updated to reflect changes in our practices and applicable laws. 
                      We encourage you to review it periodically to stay informed about how we protect your privacy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={index}
                    id={`section-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-teal-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                          {section.title}
                        </h3>
                        <div className="prose text-gray-600">
                          {section.content.split('\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-3 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Privacy Rights & Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Your Privacy Rights */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFileContract className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Privacy Rights</h3>
                  <p className="text-gray-600">Complete control over your personal data</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: FaEye, title: "Access Your Data", desc: "Request a copy of all personal information we have about you" },
                    { icon: FaUserShield, title: "Data Portability", desc: "Export your data in a structured, machine-readable format" },
                    { icon: FaHandPaper, title: "Request Deletion", desc: "Ask us to delete your personal information permanently" },
                    { icon: FaLock, title: "Opt-Out Options", desc: "Control how your data is used for marketing and analytics" }
                  ].map((right, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <right.icon className="text-teal-600 text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{right.title}</h4>
                        <p className="text-xs text-gray-600">{right.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center block flex items-center justify-center space-x-2"
                  >
                    <FaEnvelope className="text-sm" />
                    <span>Exercise Your Rights</span>
                  </Link>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Security Features</h3>
                  <p className="text-gray-600">Enterprise-grade protection for your data</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: FaLock, title: "End-to-End Encryption", desc: "All data encrypted in transit and at rest using AES-256" },
                    { icon: FaShieldAlt, title: "Multi-Factor Authentication", desc: "Additional security layers to protect your account" },
                    { icon: FaUserShield, title: "Regular Security Audits", desc: "Continuous monitoring and third-party security assessments" },
                    { icon: FaGlobe, title: "Global Compliance", desc: "GDPR, CCPA, and SOC 2 Type II certified operations" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-green-600 text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>99.9% Uptime</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>24/7 Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Privacy Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 text-white"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              </div>

              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <FaShieldAlt className="text-2xl" />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Questions About Your Privacy?
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                  Our Privacy Team is here to help. Contact us for any questions about this policy, 
                  your data rights, or our privacy practices.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <FaEnvelope />
                      <span>Contact Privacy Team</span>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="mailto:privacy@evzonetech.com"
                      className="border-2 border-white/30 hover:border-teal-400 hover:bg-teal-400/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <FaPhone />
                      <span>Email Direct</span>
                    </a>
                  </motion.div>
                </motion.div>
                
                {/* Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20"
                >
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FaLock className="text-teal-400" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FaShieldAlt className="text-blue-400" />
                    <span>Secure communication</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <FaUserShield className="text-green-400" />
                    <span>Confidential handling</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
