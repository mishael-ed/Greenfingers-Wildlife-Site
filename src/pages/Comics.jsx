import { Link } from 'react-router-dom'
import styles from './Comics.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

const COMICS = [
  {
    img: '/comics/shammas-vengeance.jpg', // replace with actual image path
    title: "Shamma's Vengeance",
    desc: 'Shamma and Batsy',
    link: '#',
  },
  {
    img: '/comics/pangolin-akin.jpg', // replace with actual image path
    title: 'Pangolin Akin',
    desc: 'A tale of endangerment',
    link: '#',
  },
  {
    img: '/comics/erinola.jpg', // replace with actual image path
    title: 'Erinola',
    desc: 'The Forest Elephant',
    link: '#',
  },
  {
    img: '/comics/draco-bee-bat.jpg', // replace with actual image path
    title: 'Draco Bee Bat',
    desc: 'The Bee',
    link: '#',
  },
]

export default function Comics() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Comics</h1>
          <p className={styles.heroSubtitle}>
            The adventures of our favourite Wildlife Species.
          </p>
        </div>
      </section>

      {/* ── Intro + Cards ── */}
      <section className={styles.cards}>
        <div className="container">
          <p className={styles.intro}>
            Explore all the comics created by Greenfingers Wildlife Conservation Initiative
            for the purpose of education on issues around conservation around the world,
            and especially in Africa.
          </p>
          <div className={styles.grid}>
            {COMICS.map((comic) => (
              <div
                key={comic.title}
                className={styles.card}
                style={{ backgroundImage: `url('${comic.img}')` }}
              >
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{comic.title}</h3>
                    {comic.desc && <p className={styles.cardDesc}>{comic.desc}</p>}
                  </div>
                  <Link to={comic.link} className={styles.readMore}>Read More</Link>
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
