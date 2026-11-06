import Image from 'next/image'
import { Clock3, Droplet, Footprints, Leaf } from 'lucide-react'
import { CheckoutExperience } from '@/components/checkout-experience'

const benefits = [
  {
    number: '01',
    icon: Footprints,
    title: 'Nutrición e hidratación garantizada',
    description: 'Permite llevar bebida isotónica',
  },
  {
    number: '02',
    icon: Clock3,
    title: 'Eficiencia y ritmo de carrera',
    description: 'Sin tiempo perdido en las paradas de agua',
  },
  {
    number: '03',
    icon: Droplet,
    title: 'Comodidad y técnica al beber',
    description: 'sin derrames sin tragos de aire. Apertura y agarre fácil',
  },
  {
    number: '04',
    icon: Leaf,
    title: 'Sostenibilidad e higiene',
    description: 'menos residuos más control de higiene por manipulación',
  },
]

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Nomade hydrate, inicio">
      <Image
        className="brand-image"
        src="/image.png"
        alt="NOMADE hydrate"
        width={88}
        height={39}
        priority
      />
    </a>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-background"
        src="/site-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <header className="hero-header">
        <BrandMark />
        <span className="menu-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </header>

      <div className="hero-copy">
        <h1 id="hero-title">
          Mantené tu<br /> movimiento
        </h1>
        <p>Con la botella que te da fluidez, confort y libertad.</p>
      </div>

      <div className="hero-product">
        <Image
          className="hero-bottle"
          src="/bottle.webp"
          alt="Botella deportiva Nomade Hydrate azul con tapa pulverizadora"
          width={286}
          height={925}
          priority
          sizes="(max-width: 680px) 32vw, 18vw"
        />
      </div>

      <ul className="feature-tiles" aria-label="Beneficios de la botella Nomade">
        {benefits.map((benefit) => {
          const Icon = benefit.icon

          return (
            <li className="feature-tile" key={benefit.number}>
              <span className="feature-icon-wrap" aria-hidden="true">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              <span className="feature-title">{benefit.title}</span>
              <span className="feature-description">{benefit.description}</span>
            </li>
          )
        })}
      </ul>

      <CheckoutExperience />
    </section>
  )
}

export function NomadLanding() {
  return (
    <main className="landing-page">
      <HeroSection />
    </main>
  )
}
