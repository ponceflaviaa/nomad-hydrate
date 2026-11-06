import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    number: '01',
    title: 'Nutrición e hidratación garantizada.',
    description: 'Lleva tu bebida isotónica y mantén el ritmo durante cada recorrido.',
  },
  {
    number: '02',
    title: 'Eficiencia y ritmo de carrera.',
    description: 'Hidrátate cuando lo necesitas, sin perder tiempo en las paradas de agua.',
  },
  {
    number: '03',
    title: 'Comodidad y técnica al beber.',
    description: 'Agarre fácil y una apertura pensada para beber en movimiento.',
  },
  {
    number: '04',
    title: 'Sostenibilidad e higiene.',
    description: 'Reutilizable, fácil de limpiar y lista para acompañarte muchos kilómetros.',
  },
]

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Nomade hydrate, inicio">
      <span className="brand-word">NOMADE</span>
      <span className="brand-subword">hydrate</span>
    </a>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-background"
        src="/images/nomade-runners.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <header className="hero-header">
        <BrandMark />
      </header>

      <div className="hero-copy">
        <h1 id="hero-title">
          La botella que te<br />
          da fluidez, confort<br />
          y libertad.
        </h1>
      </div>

      <Image
        className="hero-bottle"
        src="/images/nomade-bottle.png"
        alt="Botella deportiva Nomade azul con tapa blanca"
        width={768}
        height={1536}
        priority
        sizes="(max-width: 760px) 26vw, 250px"
      />

      <ul className="feature-tiles" aria-label="Beneficios de la botella Nomade">
        {benefits.map((benefit) => (
          <li className="feature-tile" key={benefit.number}>
            <span className="feature-tile-shape" aria-hidden="true" />
            <span className="tile-copy">{benefit.title}</span>
            <span className="sr-only">{benefit.description}</span>
          </li>
        ))}
      </ul>

      <a className="promo-tile" href="#beneficios">
        <span className="promo-copy">Más</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="benefits-section" id="beneficios" aria-labelledby="benefits-title">
      <div className="benefits-heading">
        <p className="section-kicker">Nomade hydrate</p>
        <h2 id="benefits-title">Tu ritmo no se detiene.</h2>
        <p>Una botella pensada para que hidratarte sea parte natural del camino.</p>
      </div>
    </section>
  )
}

export function NomadLanding() {
  return (
    <main className="landing-page">
      <HeroSection />
      <BenefitsSection />
    </main>
  )
}
