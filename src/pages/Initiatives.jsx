import { Link } from 'react-router-dom'
import styles from './Initiatives.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

const WW_CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80', // replace with actual sanctuary kid photo
    title: 'Day in the Sanctuary',
    desc: 'Individuals spend time in the sanctuary to learn about the animals',
    link: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', // replace with Play for Pangolins poster
    title: 'Play for Pangolins',
    desc: '',
    link: '#',
  },
]

export default function Initiatives() {
  return (
    <>
      {/* ── Wildlife Warriors ── */}
      <section id="wildlife-warriors" className={styles.wwHero}>
        <div className={styles.wwHeroOverlay} />
        <div className={styles.wwHeroContent}>
          <h1 className={styles.wwHeroTitle}>Wildlife Warriors</h1>
          <p className={styles.wwHeroSubtitle}>
            Explore the activities of our warriors and the change they are driving by taking action.
          </p>
        </div>
      </section>

      <section className={styles.wwCards}>
        <div className="container">
          <div className={styles.wwGrid}>
            {WW_CARDS.map((card) => (
              <div
                key={card.title}
                className={styles.wwCard}
                style={{ backgroundImage: `url('${card.img}')` }}
              >
                <div className={styles.wwCardOverlay} />
                <div className={styles.wwCardContent}>
                  <div className={styles.wwCardBody}>
                    <h3 className={styles.wwCardTitle}>{card.title}</h3>
                    {card.desc && <p className={styles.wwCardDesc}>{card.desc}</p>}
                  </div>
                  <Link to={card.link} className={styles.wwReadMore}>Read More</Link>
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
