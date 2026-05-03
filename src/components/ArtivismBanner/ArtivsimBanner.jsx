import { Link } from 'react-router-dom'
import styles from './ArtivismBanner.module.css'

const EVENTS = [
  {
    title: 'Greenfingers Wildlife Festival',
    desc: 'A celebration of wildlife and nature through art, music, and community engagement.',
    img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80',
    to: '/initiatives',
  },
  {
    title: 'Cli-Met Gala',
    desc: 'Where fashion meets climate action — a glamorous fundraiser for environmental causes.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    to: '/initiatives',
  },
  {
    title: 'Earth Day',
    desc: 'Join us in marking Earth Day with community clean-ups, education drives, and more.',
    img: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
    to: '/initiatives',
  },
]

export default function ArtivismBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Discover Our Events</h2>
        <div className={styles.grid}>
          {EVENTS.map((ev) => (
            <div
              key={ev.title}
              className={styles.card}
              style={{ backgroundImage: `url('${ev.img}')` }}
            >
              <div className={styles.overlay} />
              <div className={styles.content}>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{ev.title}</h3>
                  <p className={styles.cardDesc}>{ev.desc}</p>
                </div>
                <Link to={ev.to} className={styles.btn}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
