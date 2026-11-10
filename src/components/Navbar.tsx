import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Concept', href: '#concept' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Memories', href: '#memories' },
    { label: 'AI Farming', href: '#ai-farming' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Reels', href: '#reels' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Sticky Navigation Bar - Reveals cleanly on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'translate-y-0 opacity-100 bg-[#07130b]/92 backdrop-blur-md border-b border-farm-bright/15 py-2.5 shadow-xl'
            : '-translate-y-full opacity-0 pointer-events-none py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/assets/logo.png"
              alt="Urbanfarmz Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] font-semibold tracking-wider uppercase text-gray-300 hover:text-farm-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={siteConfig.getWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-white px-3 py-1.5 rounded-full border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-farm-bright" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-farm-bright to-emerald-500 hover:from-emerald-400 hover:to-farm-bright text-farm-darkest font-bold text-xs tracking-wider uppercase transition-all shadow-glow hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger & Quick CTA */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1 rounded-full bg-farm-bright text-farm-darkest text-[11px] font-bold tracking-wider uppercase shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-200 hover:text-farm-bright transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#0a1e12] border-l border-white/10 p-5 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <img
                src="/assets/logo.png"
                alt="Urbanfarmz"
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold tracking-wide text-gray-200 hover:text-farm-bright transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-farm-bright/40 text-xs">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-farm-bright text-farm-darkest font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Farm Visit</span>
            </button>
            <a
              href={siteConfig.getWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-farm-bright" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
