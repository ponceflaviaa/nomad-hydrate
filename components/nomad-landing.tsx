import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  Droplets,
  Hand,
  Recycle,
  Timer,
  Truck,
} from 'lucide-react'

const features = [
  {
    number: '01',
    title: 'Nutrición e hidratación garantizada.',
    description: 'Permite llevar tu bebida isotónica',
    Icon: Droplets,
  },
  {
    number: '02',
    title: 'Eficiencia y ritmo de carrera.',
    description: 'Sin tiempo perdido en las paradas de agua.',
    Icon: Timer,
  },
  {
    number: '03',
    title: 'Comodidad y técnica al beber.',
    description: 'Sin derrames ni tragos de aire. Apertura y agarre fácil.',
    Icon: Hand,
  },
  {
    number: '04',
    title: 'Sostenibilidad e higiene.',
    description: 'Menos residuos y más control de higiene por manipulación',
    Icon: Recycle,
  },
]

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Nomad hydrate, inicio">
      <span className="brand-name">Nomad</span>
      <span className="brand-subtitle">hydrate</span>
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <a className="header-link" href="#beneficios">
        Hecha para moverte <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Hidratación en movimiento</p>
        <h1 id="hero-title">
          La botella que te da <span>fluidez, confort y libertad.</span>
        </h1>
        <p className="hero-description">
          Tu ritmo, tu camino, tu hidratación. Todo lo que necesitas para seguir adelante con ligereza.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#beneficios">
            Elegir mi botella <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="scroll-link" href="#beneficios">
            Descubre Nomad <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="hero-proof">
          <div className="proof-icon"><Droplets aria-hidden="true" /></div>
          <div>
            <strong>Hidratación que sigue tu ritmo</strong>
            <span>Diseñada para cada kilómetro</span>
          </div>
        </div>
      </div>

      <div className="hero-visual-wrap">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-visual">
          <div className="visual-topline">
            <span>Nomad / 001</span>
            <span className="visual-dot" aria-hidden="true" />
          </div>
          <div className="product-image">
            <Image
              src="/placeholder.svg"
              alt="Espacio para fotografía de la botella Nomad hydrate"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 44vw"
            />
            <span className="image-label">Tu próxima compañera de ruta</span>
          </div>
          <div className="visual-caption">
            <span>HIDRÁTATE. MUÉVETE. REPITE.</span>
            <span className="caption-mark">N.</span>
          </div>
        </div>
        <div className="floating-note">
          <span className="floating-icon"><Droplets aria-hidden="true" /></span>
          <span>Hecha para<br /><strong>llegar más lejos</strong></span>
        </div>
        <div className="shipping-note">
          <Truck aria-hidden="true" />
          <span>Envío gratis en tu primer pedido</span>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const { Icon } = feature

  return (
    <article className="feature-card">
      <div className="feature-card-top">
        <div className="feature-icon"><Icon aria-hidden="true" /></div>
        <span className="feature-number">{feature.number}</span>
      </div>
      <h3>{feature.number.replace(/^0/, '')}. {feature.title}</h3>
      <p>{feature.description}</p>
      <span className="card-accent" aria-hidden="true" />
    </article>
  )
}

function FeaturesSection() {
  return (
    <section className="features-section" id="beneficios" aria-labelledby="features-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span /> Todo fluye mejor</p>
          <h2 id="features-title">Más camino.<br /><span>Menos interrupciones.</span></h2>
        </div>
        <p className="section-description">
          Pequeños detalles que hacen una gran diferencia cuando estás en movimiento.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature) => <FeatureCard key={feature.number} feature={feature} />)}
      </div>
    </section>
  )
}

export function NomadLanding() {
  return (
    <main className="landing-page">
      <div className="page-shell">
        <SiteHeader />
        <HeroSection />
      </div>
      <FeaturesSection />
      <footer className="site-footer">
        <BrandMark />
        <span>Fluye a tu manera.</span>
        <span>© Nomad hydrate</span>
      </footer>
    </main>
  )
}
