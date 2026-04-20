import { useState } from 'react';

const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

const channels = [
  {
    label: 'Email',
    value: 'hello@tecnostile.it',
    note: 'Risposta entro 24h',
    href: 'mailto:hello@tecnostile.it',
  },
  {
    label: 'Telefono',
    value: '+39 02 1234 5678',
    note: 'Lun–Ven, 9:00–18:00',
    href: 'tel:+390212345678',
  },
  {
    label: 'Showroom Milano',
    value: 'Via Tortona 12, 20144',
    note: 'Su appuntamento',
    href: '#',
  },
];

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', oggetto: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: '72px' }}>

      {/* Page header */}
      <div style={{ borderBottom: '1px solid #e7e5e4', paddingTop: '72px', paddingBottom: '60px' }}>
        <div style={ctr}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
            Contatti
          </p>
          <h1 className="font-light text-stone-900" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
            Parliamoci
          </h1>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ ...ctr, paddingTop: '80px', paddingBottom: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <p className="text-stone-500" style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '56px' }}>
              Hai domande su un prodotto, un ordine o vuoi semplicemente saperne di più?
              Siamo qui. Preferiamo le conversazioni vere a i chatbot automatici.
            </p>

            {/* Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group block"
                  style={{ padding: '28px 0', borderTop: '1px solid #e7e5e4' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '8px' }}>
                        {c.label}
                      </p>
                      <p className="font-medium text-stone-900 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ fontSize: '15px' }}>
                        {c.value}
                      </p>
                    </div>
                    <p style={{ fontSize: '11px', color: '#a8a29e', paddingTop: '2px' }}>{c.note}</p>
                  </div>
                </a>
              ))}
              <div style={{ borderTop: '1px solid #e7e5e4' }} />
            </div>

            {/* Social */}
            <div style={{ marginTop: '48px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
                Seguici
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                  <a key={s} href="#"
                    className="link-underline text-stone-500 hover:text-stone-900 transition-colors duration-300"
                    style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div style={{ padding: '64px 0', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', border: '1px solid #1c1917', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-light text-stone-900" style={{ fontSize: '22px', marginBottom: '12px' }}>
                  Messaggio inviato
                </h3>
                <p className="text-stone-500" style={{ fontSize: '13px', lineHeight: '1.7' }}>
                  Grazie per averci scritto. Ti risponderemo entro 24 ore lavorative.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

                {[
                  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Il tuo nome' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'La tua email' },
                  { name: 'oggetto', label: 'Oggetto', type: 'text', placeholder: 'Di cosa si tratta?' },
                ].map((field) => (
                  <div key={field.name} style={{ borderTop: '1px solid #e7e5e4', paddingTop: '24px', paddingBottom: '24px' }}>
                    <label style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8a29e', display: 'block', marginBottom: '10px' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent text-stone-900 placeholder:text-stone-300 focus:outline-none"
                      style={{ fontSize: '14px', border: 'none', padding: '0' }}
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div style={{ borderTop: '1px solid #e7e5e4', paddingTop: '24px', paddingBottom: '24px' }}>
                  <label style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a8a29e', display: 'block', marginBottom: '10px' }}>
                    Messaggio
                  </label>
                  <textarea
                    name="messaggio"
                    value={form.messaggio}
                    onChange={handleChange}
                    placeholder="Scrivici tutto quello che vuoi..."
                    required
                    rows={5}
                    className="w-full bg-transparent text-stone-900 placeholder:text-stone-300 focus:outline-none resize-none"
                    style={{ fontSize: '14px', border: 'none', padding: '0' }}
                  />
                </div>

                <div style={{ borderTop: '1px solid #e7e5e4', paddingTop: '32px' }}>
                  <button
                    type="submit"
                    className="bg-stone-900 text-white hover:bg-stone-700 transition-colors duration-300"
                    style={{ padding: '18px 48px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                  >
                    Invia messaggio
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{ borderTop: '1px solid #e7e5e4' }}>
        <div className="relative overflow-hidden" style={{ height: '320px' }}>
          <img
            src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1800&q=75"
            alt="Milano"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-[#f9f8f6]/90 backdrop-blur-sm" style={{ padding: '32px 48px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '10px' }}>
                Showroom
              </p>
              <p className="font-medium text-stone-900" style={{ fontSize: '16px', marginBottom: '4px' }}>
                Via Tortona 12
              </p>
              <p className="text-stone-500" style={{ fontSize: '13px' }}>
                20144 Milano — Su appuntamento
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
