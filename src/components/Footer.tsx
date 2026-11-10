import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#030a05] text-white border-t border-white/10 pt-14 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-52 bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer group" onClick={scrollToTop}>
              <img
                src="/assets/logo.png"
                alt="Urbanfarmz Logo"
                className="h-18 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed font-normal">
                Empowering urban families to grow their own fresh, nutritious vegetables in dedicated net-house patches with professional care and AI-guided transparency.
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Link"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-farm-bright flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Link"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-farm-bright flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-400">
              EXPLORE
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#concept"
                  onClick={(e) => handleNavClick(e, '#concept')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  About Urbanfarmz
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#memories"
                  onClick={(e) => handleNavClick(e, '#memories')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  Farm Memories & Family
                </a>
              </li>
              <li>
                <a
                  href="#ai-farming"
                  onClick={(e) => handleNavClick(e, '#ai-farming')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  AI Farming & Monitoring
                </a>
              </li>
              <li>
                <a
                  href="#memberships"
                  onClick={(e) => handleNavClick(e, '#memberships')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  Membership Plans
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="text-gray-300 hover:text-farm-bright transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-400">
              FARM LOCATION & CONTACT
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-farm-bright shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Urbanfarmz Community Farm</strong>
                  <span>{siteConfig.locationDisplay}</span>
                  <span className="block text-[11px] text-farm-bright mt-0.5">Open in Google Maps →</span>
                </div>
              </a>

              <a
                href={siteConfig.getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-farm-bright shrink-0" />
                <span>{siteConfig.whatsappDisplay} (WhatsApp & Enquiries)</span>
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-2.5 group hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-farm-bright shrink-0" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400">
              Visiting hours: 8:00 AM – 5:30 PM (Prior visit booking required).
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Urbanfarmz Community Farming. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Organic Growing Practices • Protected Net Houses</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-farm-bright hover:text-white transition-colors uppercase font-mono tracking-wider font-semibold text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
