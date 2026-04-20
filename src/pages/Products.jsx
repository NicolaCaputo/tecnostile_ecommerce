import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [sortBy, setSortBy] = useState('default');

  const filtered = products
    .filter((p) => activeCategory === 'Tutti' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen" style={{ paddingTop: '72px' }}>

      {/* Page header */}
      <div className="border-b border-stone-200" style={{ paddingTop: '72px', paddingBottom: '60px' }}>
        <div style={ctr}>
          <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 mb-5">Catalogo</p>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 leading-tight">
            Tutti i prodotti
          </h1>
        </div>
      </div>

      {/* Filters bar */}
      <div className="sticky bg-[#f9f8f6]/97 backdrop-blur-md border-b border-stone-200 z-40" style={{ top: '72px' }}>
        <div
          style={{
            ...ctr,
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Category pills */}
          <div className="flex items-center flex-wrap" style={{ gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-500 hover:text-stone-900'
                }`}
                style={{ padding: '10px 20px' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center" style={{ gap: '12px' }}>
            <span className="text-[10px] tracking-[0.15em] uppercase text-stone-400">Ordina per:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-[12px] text-stone-700 border-none outline-none cursor-pointer"
            >
              <option value="default">Consigliati</option>
              <option value="price-asc">Prezzo crescente</option>
              <option value="price-desc">Prezzo decrescente</option>
              <option value="name">Nome A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result count */}
      <div style={{ ...ctr, paddingTop: '40px', paddingBottom: '16px' }}>
        <p className="text-[11px] text-stone-400 tracking-wide">
          {filtered.length} {filtered.length === 1 ? 'prodotto' : 'prodotti'}
        </p>
      </div>

      {/* Product grid */}
      <div style={{ ...ctr, paddingBottom: '120px' }}>
        {filtered.length === 0 ? (
          <div className="text-center py-40">
            <p className="text-stone-400 text-[14px]">Nessun prodotto trovato.</p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '48px 40px',
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
