import { Link } from 'react-router-dom';

export default function Footer() {
  const innerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    paddingLeft: 'clamp(24px, 6vw, 96px)',
    paddingRight: 'clamp(24px, 6vw, 96px)',
    paddingTop: '40px',
    paddingBottom: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  };

  return (
    <footer className="border-t border-stone-200 bg-[#f9f8f6]">
      <div style={innerStyle}>
        <Link
          to="/"
          className="text-[11px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-700 transition-colors duration-300"
        >
          TECNOSTILE
        </Link>
        <p className="text-[11px] text-stone-400 tracking-wide">
          © 2026 Tecnostile. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-8">
          {[
            { label: 'Il brand', to: '/brand' },
            { label: 'Contatti', to: '/contatti' },
            { label: 'Privacy', to: '#' },
          ].map(({ label, to }) => (
            <a key={label} href={to} className="link-underline text-[11px] tracking-[0.12em] uppercase text-stone-400 hover:text-stone-700 transition-colors duration-300">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
