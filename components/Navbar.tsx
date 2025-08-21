"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ];

  // Use white text on homepage, about page, portfolio page, contact page, and privacy page when not scrolled (for dark background), black text otherwise
  const useWhiteText = (pathname === '/' || pathname === '/about' || pathname === '/portfolio' || pathname === '/contact' || pathname === '/privacy') && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo with company name */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <Image 
              src="/images/logo.png" 
              alt="EvZone Tech Logo" 
              width={50}
              height={50}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
            <span className={`font-bold transition-colors duration-300 text-lg sm:text-xl md:text-2xl ${
              useWhiteText ? 'bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-teal-500 to-blue-400 bg-clip-text text-transparent'
            }`}>EVZONE TECH</span>
          </Link>

          {/* Desktop Menu - Adjusted spacing for better distribution */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm lg:text-base font-medium transition-colors duration-200 hover:opacity-80 ${
                  !useWhiteText
                    ? (pathname === item.href ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600')
                    : (pathname === item.href ? 'text-teal-200' : 'text-white hover:text-teal-200')
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      !useWhiteText ? 'bg-teal-600' : 'bg-teal-200'
                    }`}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`
                group inline-flex items-center space-x-1 px-4 lg:px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border
                ${scrolled 
                  ? "bg-[#0D9488] text-white hover:bg-[#0B7A72] border-transparent" 
                  : "bg-white/90 text-[#0D9488] border-[#0D9488] hover:bg-[#0D9488] hover:text-white"}
                text-sm lg:text-base whitespace-nowrap
              `}
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-inherit transition-transform group-hover:translate-x-1" size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button - Improved touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              !useWhiteText
                ? 'text-gray-700 hover:text-teal-600 hover:bg-gray-100/50'
                : 'text-white hover:text-teal-200 hover:bg-white/10'
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Improved animation and layout */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-teal-600 hover:bg-teal-50 rounded-lg ${
                      pathname === item.href ? 'text-teal-600 bg-teal-50' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-center space-x-2 w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-center font-medium"
                  >
                    <span>Contact Us</span>
                    <FaArrowRight className="text-inherit transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
