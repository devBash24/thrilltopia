"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import NavButton from "../Buttons/navButton";
import Link from "next/link";

const navItems = ["Home", "About", "Promotions", "Contact"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className="fixed w-screen px-4 md:px-6 py-4 z-50"
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            {process.env.NEXT_PUBLIC_SITE_TITLE}
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavButton section={item} />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden pt-20"
          >
            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavButton section={item} />
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
