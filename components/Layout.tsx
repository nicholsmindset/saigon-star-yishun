
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isMobileMenuOpen ? 'z-[70]' : 'z-50'} transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-black/20 backdrop-blur-md py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-widest flex items-center gap-2 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}>
          <span className="text-brand-gold italic drop-shadow-lg">Saigon</span>
          <span className="hidden sm:inline font-light text-sm uppercase tracking-[0.2em] pt-1">Star Yishun</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-brand-gold ${
                location.pathname === link.path
                  ? 'text-brand-gold'
                  : isScrolled
                    ? 'text-brand-dark'
                    : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="bg-brand-gold text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark border-2 border-brand-gold transition-all duration-300 shadow-lg">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle - min 44px touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-3 -mr-2 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-brand-nude z-[60] overflow-y-auto overscroll-contain">
          <div className="min-h-screen flex flex-col pt-20">
            {/* Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-32 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif transition-colors py-2 px-4 min-h-[44px] flex items-center ${
                    location.pathname === link.path
                      ? 'text-brand-gold'
                      : 'text-brand-dark active:text-brand-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 w-full max-w-sm bg-brand-gold text-white text-center py-5 px-8 text-base uppercase tracking-widest font-bold active:bg-brand-dark transition-colors min-h-[56px] flex items-center justify-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-brand-dark text-white pt-20 pb-24 lg:pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6 tracking-widest text-brand-gold italic">Saigon Star</h2>
          <p className="text-brand-blush/90 text-sm leading-relaxed mb-6">
            Premier lash and nail artistry in Yishun. We combine meticulous technique with premium materials for results that speak for themselves.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/saigonstarss/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Facebook</a>
            <a href="https://www.instagram.com/saigonstarss/" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-gold">Opening Hours</h3>
          <ul className="text-sm space-y-3 text-brand-blush/90">
            <li className="flex justify-between">
              <span>{BUSINESS_CONFIG.hours.weekday.days}</span>
              <span>{BUSINESS_CONFIG.hours.weekday.open} - {BUSINESS_CONFIG.hours.weekday.close}</span>
            </li>
            <li className="flex justify-between">
              <span>{BUSINESS_CONFIG.hours.weekend.days}</span>
              <span>{BUSINESS_CONFIG.hours.weekend.open} - {BUSINESS_CONFIG.hours.weekend.close}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-gold">Location</h3>
          <ul className="text-sm space-y-3 text-brand-blush/90">
            <li>{BUSINESS_CONFIG.location.address}</li>
            <li>{BUSINESS_CONFIG.location.unit}, {BUSINESS_CONFIG.location.city} {BUSINESS_CONFIG.location.postalCode}</li>
            <li>
              <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="hover:text-brand-gold transition-colors">
                {BUSINESS_CONFIG.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:text-brand-gold transition-colors">
                {BUSINESS_CONFIG.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-brand-gold">Our Ethos</h3>
          <p className="text-xs text-brand-blush/80 leading-relaxed">
            Professional. Clean. Artisan. We prioritize your comfort and lash health above all else.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-wider">
            <Link to="/privacy-policy" className="text-white/60 hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <p className="text-center text-[11px] text-white/50 mt-4">
          Built with care for premium beauty experiences
        </p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppBookingLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-4 lg:bottom-10 lg:right-10 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform min-w-[48px] min-h-[48px] flex items-center justify-center"
        aria-label="WhatsApp Booking"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.296 0-4.289 1.583-4.834 3.955-.024.113-.147.214-.242.214H5.416c-.292 0-.528.236-.528.528v.241c0 .292.236.528.528.528h1.539c.095 0 .218.101.242.214.545 2.372 2.538 3.955 4.834 3.955 2.296 0 4.289-1.583 4.834-3.955.024-.113.147-.214.242-.214h1.539c.292 0 .528-.236.528-.528v-.241c0-.292-.236-.528-.528-.528h-1.539c-.095 0-.218-.101-.242-.214-.545-2.372-2.538-3.955-4.834-3.955z"/><path d="M12.012 2c-5.514 0-10 4.486-10 10s4.486 10 10 10c1.855 0 3.584-.509 5.062-1.402l4.926 1.402-1.402-4.926c.893-1.478 1.402-3.207 1.402-5.062 0-5.514-4.486-10-10-10zm0 18.286c-1.637 0-3.178-.457-4.499-1.25l-.323-.195-3.337.95.95-3.337-.195-.323c-.793-1.321-1.25-2.862-1.25-4.499 0-4.568 3.718-8.286 8.286-8.286s8.286 3.718 8.286 8.286-3.718 8.286-8.286 8.286z"/></svg>
      </a>

      {/* Sticky Bottom Booking for Mobile - with safe area for notched phones */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-effect border-t border-brand-accent/30" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="p-3 px-4">
          <Link
            to="/booking"
            className="block w-full bg-brand-gold text-white text-center py-4 text-xs uppercase tracking-widest font-bold active:bg-brand-dark transition-colors min-h-[48px] flex items-center justify-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
