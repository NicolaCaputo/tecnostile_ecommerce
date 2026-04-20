import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const inCart = cart.some((i) => i.id === product.id);

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/prodotti/${product.id}`} className="block">

        {/* Image */}
        <div className="relative overflow-hidden bg-stone-100 aspect-[3/4]">
          {product.badge && (
            <span className="absolute top-5 left-5 z-10 bg-stone-900 text-white"
              style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 10px' }}>
              {product.badge}
            </span>
          )}
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card-img w-full h-full object-cover"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="product-card-img absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </div>

        {/* Info block */}
        <div style={{ paddingTop: '22px', paddingBottom: '8px' }}>

          {/* Category */}
          <p style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '10px' }}>
            {product.category}
          </p>

          {/* Name */}
          <h3 style={{ fontSize: '17px', fontWeight: '500', color: '#1c1917', lineHeight: '1.25', marginBottom: '8px' }}>
            {product.name}
          </h3>

          {/* Subtitle — single line, truncated */}
          <p style={{ fontSize: '12px', color: '#78716c', lineHeight: '1.5', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
            {product.subtitle}
          </p>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #e7e5e4', margin: '20px 0 18px' }} />

          {/* Price */}
          <p style={{ fontSize: '20px', fontWeight: '300', color: '#1c1917', letterSpacing: '-0.01em' }}>
            €{product.price.toLocaleString('it-IT')}
          </p>

        </div>
      </Link>

      {/* Button — clearly separated */}
      <button
        onClick={() => addToCart(product)}
        className={`w-full transition-all duration-300 border ${
          inCart
            ? 'bg-stone-900 text-white border-stone-900'
            : 'bg-transparent text-stone-900 border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900'
        }`}
        style={{ marginTop: '16px', padding: '16px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
      >
        {inCart ? 'Aggiunto ✓' : 'Aggiungi al carrello'}
      </button>
    </div>
  );
}
