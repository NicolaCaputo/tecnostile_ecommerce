import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f9f8f6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1800&q=85"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 text-center" style={{ padding: '0 clamp(24px, 6vw, 96px)', maxWidth: '800px', width: '100%' }}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-stone-400 mb-10">
            Nuova Collezione 2026
          </p>
          <h1 className="font-light text-stone-900 leading-none tracking-tight mb-10"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            Tecnologia<br />
            <em className="italic font-light">senza compromessi</em>
          </h1>
          <p className="text-stone-500 font-light mx-auto"
            style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '680px', marginBottom: '64px' }}>
            Prodotti pensati per chi non accetta la mediocrità. Design, prestazioni, eleganza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '16px' }}>
            <Link
              to="/prodotti"
              className="w-full sm:w-auto bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300"
              style={{ padding: '18px 48px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              Esplora i prodotti
            </Link>
            <Link
              to="/prodotti"
              className="w-full sm:w-auto border text-stone-900 hover:border-stone-900 transition-colors duration-300"
              style={{ padding: '18px 48px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', borderColor: '#a8a29e' }}
            >
              Scopri di più
            </Link>
          </div>
        </div>

        <div className="absolute flex flex-col items-center" style={{ bottom: '48px', left: '50%', transform: 'translateX(-50%)', gap: '12px' }}>
          <span className="text-stone-400" style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scorri</span>
          <div className="w-px bg-gradient-to-b from-stone-400 to-transparent" style={{ height: '48px' }} />
        </div>
      </section>

      {/* ── Marquee strip ─────────────────────────────────────── */}
      <section className="bg-stone-900 text-white overflow-hidden" style={{ padding: '20px 0' }}>
        <div className="flex whitespace-nowrap" style={{ gap: '0', animation: 'marquee 22s linear infinite' }}>
          {Array(12).fill(['Spedizione gratuita', 'Garanzia 2 anni', 'Reso 30 giorni', 'Assistenza dedicata', 'Pagamento sicuro']).flat().map((text, i) => (
            <span key={i} className="text-stone-400 flex-shrink-0" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '0 32px' }}>
              {text} <span className="text-stone-700 mx-4">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured products ─────────────────────────────────── */}
      <section style={{ ...ctr, paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="flex items-end justify-between" style={{ marginBottom: '64px' }}>
          <div>
            <p className="text-stone-400 mb-4" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Selezione</p>
            <h2 className="font-light text-stone-900 leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              I più amati
            </h2>
          </div>
          <Link
            to="/prodotti"
            className="link-underline hidden md:block text-stone-500 hover:text-stone-900 transition-colors duration-300 pb-1"
            style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Vedi tutti →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '48px 40px' }}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center md:hidden">
          <Link
            to="/prodotti"
            className="border border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
            style={{ padding: '16px 40px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Vedi tutti i prodotti
          </Link>
        </div>
      </section>

      {/* ── Full-bleed editorial ──────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '75vh' }}>
        <img
          src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1800&q=80"
          alt="Tech lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.75) 0%, rgba(28,25,23,0.2) 50%, transparent 100%)' }}>
          <div style={{ ...ctr, paddingBottom: '80px', paddingTop: '40px', maxWidth: '800px' }}>
            <p className="text-white/50 mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Progetto speciale</p>
            <h2 className="font-light text-white leading-tight whitespace-nowrap" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', marginBottom: '40px' }}>
              Il futuro è <em className="italic">già qui</em>
            </h2>
            <Link
              to="/prodotti"
              className="inline-block border border-white/50 text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
              style={{ padding: '18px 40px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              Scopri la collezione
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="border-t border-stone-200" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{ ...ctr, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}
          className="md:!grid-cols-4">
          {[
            { num: '12K+', label: 'Clienti soddisfatti' },
            { num: '98%', label: 'Recensioni positive' },
            { num: '48h', label: 'Spedizione rapida' },
            { num: '2 anni', label: 'Garanzia inclusa' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center flex flex-col" style={{ gap: '12px' }}>
              <p className="font-light text-stone-900" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>{num}</p>
              <p className="uppercase text-stone-400" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className="bg-stone-900" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{ ...ctr, maxWidth: '600px', textAlign: 'center' }}>
          <p className="text-stone-500 mb-5" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>Newsletter</p>
          <h2 className="font-light text-white mb-5" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
            Resta aggiornato
          </h2>
          <p className="text-stone-400 mb-10 leading-relaxed" style={{ fontSize: '14px' }}>
            Sii il primo a conoscere i nuovi arrivi, le offerte esclusive e le novità del mondo tech.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 min-w-0 bg-transparent text-white placeholder:text-stone-600 focus:outline-none transition-colors duration-300"
              style={{ border: '1px solid #44403c', borderRight: 'none', padding: '16px 20px', fontSize: '13px' }}
              onFocus={(e) => e.target.style.borderColor = '#a8a29e'}
              onBlur={(e) => e.target.style.borderColor = '#44403c'}
            />
            <button
              type="submit"
              className="bg-white text-stone-900 hover:bg-stone-100 transition-colors duration-300 shrink-0"
              style={{ padding: '16px 28px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
