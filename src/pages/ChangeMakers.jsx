import { Link } from 'react-router-dom'
import styles from './ChangeMakers.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

const CARDS = [
  {
    img: '/changemakers/eco-tourism.jpg', // replace with actual image
    title: 'Eco Tourism',
    desc: 'Our Eco-trip to Abeokuta',
    link: '#',
  },
  {
    img: '/changemakers/car-wash.jpg', // replace with actual image
    title: 'Car Wash',
    desc: 'Fund raising',
    link: '#',
  },
  {
    img: '/changemakers/adeola-fayehun.jpg', // replace with actual image
    title: "Adeola Fayehun's Youtube",
    desc: 'Click to watch our feature.',
    link: '#',
  },
  {
    img: '/changemakers/trashion-2021.jpg', // replace with actual image
    title: 'Trashion 2021',
    desc: 'We did a pop-up at The Palms Lekki to advocate against the mindless dumping of single use plastic in our drainages.',
    link: '#',
  },
  {
    img: '/changemakers/trashion-2022.jpg', // replace with actual image
    title: 'Trashion 2022',
    desc: 'The event featured the use of plastic waste to create cloths that bring awareness to the dangers of single use plastic.',
    link: '#',
  },
]

export default function ChangeMakers() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Change Makers</h1>
          <p className={styles.heroSubtitle}>
            These are passionate teens changing the narrative of the environmental and
            wildlife advocacy in Nigeria. Explore their work by clicking to read updates
            shared on this page.
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
