import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

export default function Cart() {
  const { cart, removeFromCart, updateQty, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: '72px' }}>
        <div className="text-center" style={{ padding: '0 24px' }}>
          <div className="border border-stone-300 flex items-center justify-center mx-auto mb-8"
            style={{ width: '64px', height: '64px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-400">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h1 className="font-light text-stone-900" style={{ fontSize: '28px', marginBottom: '12px' }}>
            Il tuo carrello è vuoto
          </h1>
          <p className="text-stone-500" style={{ fontSize: '13px', marginBottom: '40px' }}>
            Inizia ad aggiungere prodotti che ami.
          </p>
          <Link
            to="/prodotti"
            className="inline-block bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300"
            style={{ padding: '18px 48px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          >
            Esplora i prodotti
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ paddingTop: '72px' }}>
      <div style={{ ...ctr, paddingTop: '64px', paddingBottom: '120px' }}>

        {/* Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: '64px' }}>
          <div>
            <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Shopping
            </p>
            <h1 className="font-light text-stone-900" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Carrello <span className="text-stone-400">({cart.length})</span>
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-stone-400 hover:text-stone-700 transition-colors duration-300"
            style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Svuota carrello
          </button>
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}
          className="lg:!grid-cols-[1fr_360px]">

          {/* Items */}
          <div className="divide-y divide-stone-200">
            {cart.map((item) => (
              <div key={item.id} className="flex" style={{ gap: '32px', paddingTop: '40px', paddingBottom: '40px' }}>
                {/* Image */}
                <Link to={`/prodotti/${item.id}`} className="flex-shrink-0">
                  <div className="overflow-hidden bg-stone-100" style={{ width: '100px', height: '124px' }}>
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between" style={{ gap: '16px' }}>
                    <div>
                      <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {item.category}
                      </p>
                      <Link to={`/prodotti/${item.id}`}>
                        <h3 className="font-medium text-stone-900 hover:opacity-60 transition-opacity" style={{ fontSize: '15px' }}>
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-stone-500" style={{ fontSize: '12px', marginTop: '2px' }}>{item.subtitle}</p>
                    </div>
                    <p className="font-medium text-stone-900 whitespace-nowrap" style={{ fontSize: '15px' }}>
                      €{(item.price * item.qty).toLocaleString('it-IT')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between" style={{ marginTop: '28px' }}>
                    {/* Quantity */}
                    <div className="flex items-center border border-stone-300">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-200"
                        style={{ width: '40px', height: '40px' }}
                        aria-label="Diminuisci"
                      >
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor"><rect width="10" height="2" /></svg>
                      </button>
                      <span className="text-center font-medium text-stone-900" style={{ width: '44px', fontSize: '13px' }}>
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-200"
                        style={{ width: '40px', height: '40px' }}
                        aria-label="Aumenta"
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <rect x="4" width="2" height="10" /><rect y="4" width="10" height="2" />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-stone-900 transition-colors duration-200"
                      style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      Rimuovi
                    </button>
                  </div>

                  <p className="text-stone-400" style={{ fontSize: '11px', marginTop: '8px' }}>
                    €{item.price.toLocaleString('it-IT')} cad.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-stone-50" style={{ padding: '40px', position: 'sticky', top: '88px' }}>
              <h2 className="text-stone-500" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '32px' }}>
                Riepilogo ordine
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Subtotale', value: `€${total.toLocaleString('it-IT')}` },
                  { label: 'Spedizione', value: 'Gratuita' },
                  { label: 'IVA (22%)', value: 'inclusa' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between" style={{ fontSize: '13px' }}>
                    <span className="text-stone-500">{label}</span>
                    <span className="text-stone-900">{value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-200" style={{ paddingTop: '24px', marginBottom: '32px' }}>
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-stone-900" style={{ fontSize: '13px' }}>Totale</span>
                  <span className="font-light text-stone-900" style={{ fontSize: '24px' }}>€{total.toLocaleString('it-IT')}</span>
                </div>
              </div>

              <button
                className="w-full bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300"
                style={{ padding: '20px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '12px' }}
              >
                Procedi al pagamento
              </button>

              <Link
                to="/prodotti"
                className="block w-full text-center border border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                style={{ padding: '20px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                Continua lo shopping
              </Link>

              {/* Promo code */}
              <div style={{ marginTop: '32px' }}>
                <p className="text-stone-400" style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Codice promozionale
                </p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Inserisci codice"
                    className="flex-1 bg-transparent text-stone-700 placeholder:text-stone-400 focus:outline-none"
                    style={{ border: '1px solid #d6d3d1', borderRight: 'none', padding: '12px 14px', fontSize: '12px' }}
                  />
                  <button
                    className="text-stone-600 hover:bg-stone-900 hover:text-white transition-all duration-300"
                    style={{ border: '1px solid #d6d3d1', padding: '12px 16px', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    Applica
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
