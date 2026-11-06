import Image from 'next/image'
import { Clock3, Droplet, Leaf, PersonStanding } from 'lucide-react'

const benefits = [
  {
    number: '01',
    icon: PersonStanding,
    title: 'Nutrición e hidratación garantizada.',
    description: 'Lleva tu bebida isotónica y mantén el ritmo en cada recorrido.',
  },
  {
    number: '02',
    icon: Clock3,
    title: 'Eficiencia y ritmo de carrera.',
    description: 'Agua a mano, sin perder tiempo en las paradas.',
  },
  {
    number: '03',
    icon: Droplet,
    title: 'Comodidad y técnica al beber.',
    description: 'Agarre fácil y apertura pensada para beber en movimiento.',
  },
  {
    number: '04',
    icon: Leaf,
    title: 'Sostenibilidad e higiene.',
    description: 'Reutilizable, práctica y fácil de limpiar.',
  },
]

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Nomade hydrate, inicio">
      <Image
        className="brand-image"
        src="/images/nomade-logo-cutout.png"
        alt=""
        width={86}
        height={42}
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
        src="/images/nomade-runners.png"
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
          La botella que te<br />
          da fluidez, confort<br />
          y libertad.
        </h1>
      </div>

      <div className="hero-product">
        <Image
          className="hero-bottle"
          src="/images/nomade-bottle-cutout.png"
          alt="Botella deportiva Nomade azul con tapa blanca"
          width={54}
          height={185}
          priority
          sizes="(max-width: 760px) 11vw, 78px"
        />
        <Image
          className="bottle-logo"
          src="/images/nomade-logo-cutout.png"
          alt=""
          width={86}
          height={42}
        />
      </div>

      <ul className="feature-tiles" aria-label="Beneficios de la botella Nomade">
        {benefits.map((benefit) => {
          const Icon = benefit.icon

          return (
            <li className="feature-tile" key={benefit.number}>
              <span className="feature-icon-wrap" aria-hidden="true">
                <Icon size={14} strokeWidth={2.5} />
              </span>
              <span className="feature-title">{benefit.title}</span>
              <span className="feature-description">{benefit.description}</span>
            </li>
          )
        })}
      </ul>

      <a className="promo-tile" href="#beneficios">
        <span className="promo-copy">Elegir mi botella</span>
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
