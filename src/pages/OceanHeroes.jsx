import { Link } from 'react-router-dom'
import styles from './OceanHeroes.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

const CARDS = [
  {
    img: '/ocean-heroes/world-environment-day.jpg', // replace with actual image
    title: 'World Environment Day – June 5',
    desc: 'Beach Cleanup',
    link: '#',
  },
  {
    img: '/ocean-heroes/oceans-day.jpg', // replace with actual image
    title: 'Oceans Day',
    desc: 'In celebration of life under the sea.',
    link: '#',
  },
]

export default function OceanHeroes() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Ocean Heroes</h1>
          <p className={styles.heroSubtitle}>
            Come with us on our advocacy to protect the species in our oceans.
          </p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className={styles.cards}>
        <div className="container">
          <div className={styles.grid}>
            {CARDS.map((card) => (
              <div
                key={card.title}
                className={styles.card}
                style={{ backgroundImage: `url('${card.img}')` }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    {card.desc && <p className={styles.cardDesc}>{card.desc}</p>}
                  </div>
                  <Link to={card.link} className={styles.readMore}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  )
}
