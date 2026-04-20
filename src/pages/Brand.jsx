const ctr = {
  maxWidth: '1100px',
  margin: '0 auto',
  paddingLeft: 'clamp(24px, 6vw, 96px)',
  paddingRight: 'clamp(24px, 6vw, 96px)',
};

const milestones = [
  { year: '2018', title: 'Le origini', text: 'Tutto nasce da una domanda semplice: perché scegliere tra estetica e prestazioni? Fondata a Milano da un gruppo di ingegneri e designer, Tecnostile nasce con la missione di ridefinire il rapporto tra tecnologia e bellezza.' },
  { year: '2020', title: 'Il primo prodotto', text: 'Lanciamo AuraPod, le nostre prime cuffie. Sold out in 48 ore. Non era solo un prodotto — era la dimostrazione che il mercato aspettava qualcosa di diverso: oggetti tech che si sentissero vivi tra le mani.' },
  { year: '2022', title: 'Espansione europea', text: 'Apriamo il flagship store a Milano e distribuiamo in 12 paesi europei. Ogni punto vendita è pensato come uno spazio esperienziale, non un negozio: luci soffuse, superfici naturali, prodotti al centro.' },
  { year: '2024', title: 'La nuova era', text: 'Lanciamo la nostra linea di indossabili e sistemi audio home. Integriamo la manifattura in Italia per i modelli premium. Ogni prodotto nasce a 200km dal Duomo.' },
  { year: '2026', title: 'Oggi', text: 'Oltre 12.000 clienti in Europa. Un team di 40 persone tra Milano e Berlino. E la stessa ossessione del giorno zero: fare tecnologia che duri, che emozioni, che non si dimentichi.' },
];

export default function Brand() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
          alt="Studio Tecnostile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.82) 0%, rgba(28,25,23,0.3) 55%, transparent 100%)' }}>
          <div style={{ ...ctr, paddingBottom: '72px', paddingTop: '40px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
              Il brand
            </p>
            <h1 className="font-light text-white" style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
              Tecnologia<br /><em className="italic">con anima</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ ...ctr, maxWidth: '800px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '32px' }}>
            Il nostro manifesto
          </p>
          <blockquote style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '300', color: '#1c1917', lineHeight: '1.5', letterSpacing: '-0.01em' }}>
            "Crediamo che la tecnologia debba essere bella quanto è potente.
            Che un oggetto tech possa emozionare al tatto, non solo alle specifiche.
            Che il futuro si costruisca con cura — un dettaglio alla volta."
          </blockquote>
          <p style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', marginTop: '28px' }}>
            — Marco Ferretti, Founder
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', borderBottom: '1px solid #e7e5e4' }}>
        <div style={ctr}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
            I nostri valori
          </p>
          <h2 className="font-light text-stone-900" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: '64px' }}>
            Cosa ci guida ogni giorno
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '48px 40px' }}>
            {[
              { title: 'Artigianalità', text: 'Ogni prodotto passa attraverso 140 controlli qualità prima di uscire dalla nostra manifattura. Non è burocrazia — è rispetto per chi lo porterà con sé.' },
              { title: 'Durabilità', text: 'Progettiamo per durare 10 anni, non per essere sostituiti in due. Pezzi di ricambio garantiti, aggiornamenti software a vita, riparabilità certificata.' },
              { title: 'Minimalismo', text: 'Togliamo tutto ciò che non serve. Ogni curva, ogni porta, ogni LED ha una ragione di esistere. Il bello nasce dall\'essenziale.' },
              { title: 'Trasparenza', text: 'Sappiamo da dove arrivano i nostri componenti. Pubblichiamo la carbon footprint di ogni prodotto. Nessun greenwashing — solo fatti.' },
            ].map(({ title, text }) => (
              <div key={title}>
                <div style={{ width: '32px', height: '1px', background: '#d6d3d1', marginBottom: '24px' }} />
                <h3 className="font-medium text-stone-900" style={{ fontSize: '15px', marginBottom: '12px' }}>{title}</h3>
                <p className="text-stone-500" style={{ fontSize: '13px', lineHeight: '1.7' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', borderBottom: '1px solid #e7e5e4' }}>
        <div style={ctr}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
            La storia
          </p>
          <h2 className="font-light text-stone-900" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: '72px' }}>
            Dal garage alla scrivania di 12.000 persone
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <div key={m.year}
                className="group"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '40px',
                  paddingTop: '36px',
                  paddingBottom: '36px',
                  borderTop: '1px solid #e7e5e4',
                  alignItems: 'start',
                }}>
                <p className="text-stone-300 group-hover:text-stone-900 transition-colors duration-300"
                  style={{ fontSize: '13px', fontWeight: '500', paddingTop: '2px' }}>
                  {m.year}
                </p>
                <div>
                  <p className="font-medium text-stone-900" style={{ fontSize: '15px', marginBottom: '10px' }}>{m.title}</p>
                  <p className="text-stone-500" style={{ fontSize: '13px', lineHeight: '1.7' }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={ctr}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '20px' }}>
                Il team
              </p>
              <h2 className="font-light text-stone-900" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: '24px' }}>
                40 persone.<br />Una sola ossessione.
              </h2>
              <p className="text-stone-500" style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '32px' }}>
                Ingegneri, designer, artigiani e ricercatori. Veniamo da Apple, Braun, Ferrari, Politecnico di Milano.
                Siamo qui perché crediamo che ci sia ancora molto da fare — e che valga la pena farlo bene.
              </p>
              <div style={{ display: 'flex', gap: '48px' }}>
                {[{ num: '40', label: 'Persone' }, { num: '8', label: 'Nazionalità' }, { num: '3', label: 'Sedi' }].map(({ num, label }) => (
                  <div key={label}>
                    <p className="font-light text-stone-900" style={{ fontSize: '32px' }}>{num}</p>
                    <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a8a29e', marginTop: '4px' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Il team Tecnostile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
