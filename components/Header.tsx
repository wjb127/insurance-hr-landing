"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "조직소개" },
    { href: "#team", label: "구성원" },
    { href: "#recruitment", label: "채용/입사지원" },
    { href: "#contact", label: "문의하기" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-dark border-b border-white/10 h-[66px]"
          : "bg-transparent h-[89px]"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl lg:text-2xl font-bold gradient-text"
          >
            Insurance HR
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3182f6] to-[#00d255] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#recruitment"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white font-medium hover-glow transition-all duration-300 hover:scale-105"
            >
              입사지원
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden z-10 p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden fixed inset-y-0 right-0 w-64 glass-dark border-l border-white/10 px-6 py-20"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-white/80 hover:text-white transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#recruitment"
                  className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#3182f6] to-[#00d255] text-white font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  입사지원
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm"
            style={{ zIndex: -1 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
