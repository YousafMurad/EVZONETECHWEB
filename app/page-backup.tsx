'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiCode, FiSmartphone, FiShield, FiSettings, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Functional Testing",
      description: "Create custom software concept for your business and achieve exactly what you need from the tech and technology.",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "Test automation",
      description: "Create custom software based on our end-to-end design and technology.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "API testing",
      description: "Get testing of mobile app, testing and business process analytics to enhance business value.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Visual Regression Testing",
      description: "Build beautiful, user-friendly, and professional mobile applications user interface design.",
      color: "from-red-400 to-red-500"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile APP testing",
      description: "Build specifications for mobile and secure mobile applications for all operational requirements.",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security Testing",
      description: "Secure automation are quality, fast security and highly performed with the best network at any testing needs.",
      featured: true,
      color: "from-teal-400 to-teal-500"
    }
  ]

  const testimonials = [
    {
      text: "Consistently professional, on time-focused and community work on community planning and have looked extraordinary too everything.",
      author: "John Stewart",
      role: "Manager"
    },
    {
      text: "We consistently look real and appealing experience between service extremely high-speed everything.",
      author: "Sarah Johnson", 
      role: "CEO"
    },
    {
      text: "We methodically test real and appealing service between service extremely everything.",
      author: "Michael Brown",
      role: "CTO"
    }
  ]

  const achievements = [
    { icon: <FiUsers />, title: "Attention to Details", number: "1000+" },
    { icon: <FiAward />, title: "A Plan for Success", number: "500+" },
    { icon: <FiCheckCircle />, title: "Meeting Deadlines", number: "99%" },
    { icon: <FiTrendingUp />, title: "24x7 Monitoring", number: "24/7" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full text-teal-600 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 mr-2" />
                A TRUSTED COMPANY
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Quality Assurance Quality Control and Testing — the{' '}
                <span className="gradient-text">
                  Basics of Software Quality Management
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At EvZone, we deliver top-performance, and best in every software product.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Get Started
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiShield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center shadow-lg">
                  <FiCheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive testing solutions tailored for every stage of your product
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`service-card ${service.featured ? 'featured' : ''}`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 ${service.featured ? 'bg-white/20' : ''}`}>
                  <div className={service.featured ? 'text-white' : 'text-white'}>
                    {service.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${service.featured ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${service.featured ? 'text-white/90' : 'text-gray-600'} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Development Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCode className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Development Services</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                End-To-End Development Services
              </h2>
              <p className="text-lg text-gray-600">
                Complete testing solutions tailored for every stage of your product
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FiCheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Smart, Scale Fast, Stay Ahead</h4>
                    <p className="text-gray-600">Our solutions are built for modern businesses that need to move fast and scale efficiently.</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn-primary inline-flex items-center">
                Learn More
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-600">
                  Our team brings precision, speed, and scalability to your testing needs. 
                  You can't just find bugs — we prevent your brand.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <div className="text-teal-500 text-xl">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-green-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Award Winning</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-lg text-gray-600">
              Consistently development is often related with community work on community 
              planning and have looked extraordinary too software specializing foundations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-400 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Don't Let Bugs Hold You Back - Test Smarter Today!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We help startups and enterprises ensure flawless performance through 
              end-to-end QA testing and automation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-teal-500 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
