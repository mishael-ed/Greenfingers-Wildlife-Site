import { Link } from 'react-router-dom'
import styles from './ArtivismSection.module.css'

export default function ArtivismSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>Greenfingers Artivism Projects</h2>
            <p>
              Greenfingers is fighting plastic pollution head-on. Through our #Artivism campaign,
              we transform waste into powerful works of art — making the invisible visible and
              inspiring communities to rethink their relationship with single-use plastics.
            </p>
            <p>
              Our flagship Trashion Show turns discarded materials into stunning fashion pieces,
              proving that creativity and conservation go hand in hand. Every garment tells a story
              of environmental responsibility and artistic ingenuity.
            </p>
            <Link to="/initiatives#artivism" className={`btn-donate ${styles.btn}`}>Learn More</Link>
          </div>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
              alt="Artivism in action"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
