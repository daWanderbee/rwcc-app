'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Your Spot', href: '#your-spot' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'The Kit', href: '#the-kit' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#F2DABB] border-b-2 border-[#942A45]/20 px-4 sm:px-8 lg:px-12 xl:px-16 py-3 lg:py-3.5 flex items-center justify-between transition-all shadow-sm">
      {/* Top Left: Logo Unit */}
      <div className="flex items-center gap-6 lg:gap-10">
        <AnimatePresence>
          {showLogo && (
            <motion.a
              href="#"
              initial={{ opacity: 0, scale: 0.85, x: -12 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: -12 }}
              transition={{ duration: 0.3 }}
              className="flex items-center group shrink-0"
            >
              <Image
                src="/images/rwcc.png"
                alt="RWCC Logo Unit"
                width={44}
                height={44}
                priority
                className="h-9 sm:h-10 lg:h-11 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
              />
            </motion.a>
          )}
        </AnimatePresence>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-base font-bold text-[#942A45]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#ED544B] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Top Right: CTA & Mobile Hamburger using shadcn Button */}
      <div className="flex items-center gap-3">
        <Button
          asChild
          size="sm"
          className="font-black shadow-md text-sm lg:text-base lg:px-6 lg:py-2.5"
        >
          <a href="#join-cta">Join The Club</a>
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-[#942A45]/10 text-[#942A45] hover:bg-[#942A45]/20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#F2DABB] border-b-4 border-[#942A45] shadow-xl py-4 px-6 md:hidden flex flex-col gap-3 font-bold text-base text-[#942A45]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E5C7A3] hover:text-[#ED544B] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#ED544B]">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
