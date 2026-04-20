import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Product3DViewer from '../components/Product3DViewer';

const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, cart } = useCart();
  const [selectedImg, setSelectedImg] = useState(0);
  const [activeTab, setActiveTab] = useState('3d');
  const inCart = cart.some((i) => i.id === product?.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-400 mb-6">Prodotto non trovato.</p>
          <Link to="/prodotti" className="text-[11px] tracking-[0.15em] uppercase underline">
            Torna ai prodotti
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ paddingTop: '72px' }}>

      {/* Breadcrumb */}
      <div style={{ ...ctr, paddingTop: '28px', paddingBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => navigate(-1)}
          className="text-stone-400 hover:text-stone-700 transition-colors flex items-center"
          style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', gap: '8px' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Indietro
        </button>
        <span className="text-stone-300">·</span>
        <Link to="/prodotti" className="text-stone-400 hover:text-stone-700 transition-colors"
          style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Prodotti
        </Link>
        <span className="text-stone-300">·</span>
        <span className="text-stone-600" style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {product.name}
        </span>
      </div>

      {/* Main content */}
      <div style={{ ...ctr, paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>

          {/* Left: Media */}
          <div>
            {/* Tab switcher */}
            <div className="flex" style={{ gap: '4px', marginBottom: '16px' }}>
              {[
                { key: '3d', label: '3D Interattivo' },
                { key: 'photo', label: 'Foto' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`transition-all duration-200 ${
                    activeTab === tab.key ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                  }`}
                  style={{ padding: '10px 20px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Viewer area */}
            <div className="bg-stone-100 relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              {activeTab === '3d' ? (
                <Product3DViewer product={product} />
              ) : (
                <img src={product.images[selectedImg]} alt={product.name} className="w-full h-full object-cover" />
              )}
              {product.badge && (
                <span className="absolute bg-stone-900 text-white" style={{ top: '20px', left: '20px', zIndex: 10, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '6px 12px' }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {activeTab === 'photo' && product.images.length > 1 && (
              <div className="flex" style={{ gap: '12px', marginTop: '12px' }}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`overflow-hidden transition-all duration-200 ${selectedImg === i ? 'ring-1 ring-stone-900 ring-offset-2' : 'opacity-50 hover:opacity-100'}`}
                    style={{ width: '64px', height: '64px' }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col" style={{ paddingTop: '8px' }}>
            <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {product.category}
            </p>
            <h1 className="font-light text-stone-900" style={{ fontSize: 'clamp(28px, 3vw, 40px)', marginBottom: '8px' }}>
              {product.name}
            </h1>
            <p className="text-stone-500" style={{ fontSize: '14px', marginBottom: '32px' }}>
              {product.subtitle}
            </p>

            <p className="font-light text-stone-900" style={{ fontSize: '32px', marginBottom: '40px' }}>
              €{product.price.toLocaleString('it-IT')}
            </p>

            <p className="text-stone-600 leading-relaxed" style={{ fontSize: '13px', marginBottom: '40px' }}>
              {product.description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: '40px' }}>
              <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Caratteristiche
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.features.map((f) => (
                  <li key={f} className="flex items-center text-stone-700" style={{ gap: '12px', fontSize: '12px' }}>
                    <span className="bg-stone-400 flex-shrink-0" style={{ width: '16px', height: '1px' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row" style={{ gap: '12px', marginTop: 'auto' }}>
              <button
                onClick={() => addToCart(product)}
                className={`flex-1 transition-all duration-300 ${inCart ? 'bg-stone-700 text-white cursor-default' : 'bg-stone-900 text-white hover:bg-stone-700'}`}
                style={{ padding: '20px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {inCart ? 'Aggiunto al carrello ✓' : 'Aggiungi al carrello'}
              </button>
              {inCart && (
                <Link
                  to="/carrello"
                  className="text-center border border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                  style={{ padding: '20px 40px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                >
                  Vai al carrello
                </Link>
              )}
            </div>

            {/* Trust signals */}
            <div className="border-t border-stone-200" style={{ marginTop: '32px', paddingTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { icon: '🚚', label: 'Spedizione gratuita' },
                { icon: '↩', label: 'Reso 30 giorni' },
                { icon: '🛡', label: 'Garanzia 2 anni' },
              ].map(({ icon, label }) => (
                <div key={label} className="text-center">
                  <span className="block text-lg mb-1">{icon}</span>
                  <span className="text-stone-400" style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-stone-200" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <div style={ctr}>
          <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Potrebbe piacerti
          </p>
          <h2 className="font-light text-stone-900" style={{ fontSize: '28px', marginBottom: '48px' }}>
            Prodotti correlati
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '32px' }}>
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/prodotti/${p.id}`} className="group block">
                  <div className="overflow-hidden bg-stone-100" style={{ aspectRatio: '1 / 1', marginBottom: '12px' }}>
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-medium text-stone-800" style={{ fontSize: '12px' }}>{p.name}</p>
                  <p className="text-stone-500" style={{ fontSize: '12px' }}>€{p.price.toLocaleString('it-IT')}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
