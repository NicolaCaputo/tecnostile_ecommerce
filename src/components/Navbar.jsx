import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

const NAV_H = 72;

export default function Navbar() {
  const { count } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const solid = !isHome || scrolled;

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Prodotti', to: '/prodotti' },
    { label: 'Il brand', to: '/brand' },
    { label: 'Contatti', to: '/contatti' },
  ];

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    paddingLeft: 'clamp(24px, 6vw, 96px)',
    paddingRight: 'clamp(24px, 6vw, 96px)',
    height: `${NAV_H}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-500 ${
        solid
          ? 'bg-[#f9f8f6]/97 backdrop-blur-md border-b border-stone-200/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav style={containerStyle}>
        {/* Logo */}
        <Link
          to="/"
          className="text-[13px] tracking-[0.22em] uppercase font-medium text-stone-900 hover:opacity-50 transition-opacity duration-300"
        >
          TECNOSTILE
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`link-underline text-[11px] tracking-[0.15em] uppercase transition-opacity duration-300 ${
                  location.pathname === link.to ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-8">
          <Link
            to="/carrello"
            className="relative flex items-center gap-2.5 text-[11px] tracking-[0.15em] uppercase opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="hidden md:inline">Carrello</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 md:static md:ml-0.5 bg-stone-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center leading-none font-medium">
                {count}
              </span>
            )}
          </Link>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-stone-900 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-stone-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-stone-900 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#f9f8f6]/99 backdrop-blur-md border-t border-stone-200/60 flex flex-col gap-8"
          style={{ padding: '40px clamp(24px, 6vw, 96px)' }}
        >
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-[14px] tracking-[0.18em] uppercase text-stone-900">
              {link.label}
            </Link>
          ))}
          <Link to="/carrello" className="text-[14px] tracking-[0.18em] uppercase text-stone-900">
            Carrello {count > 0 && `(${count})`}
          </Link>
        </div>
      )}
    </header>
  );
}
