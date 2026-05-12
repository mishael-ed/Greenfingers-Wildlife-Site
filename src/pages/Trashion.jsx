import { Link } from 'react-router-dom'
import styles from './Trashion.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

export default function Trashion() {
  return (
    <>
      <section className={styles.trashionSection}>
        <div className="container">
          <div className={styles.trashionGrid}>
            <div className={styles.trashionText}>
              <h2 className={styles.trashionHeading}>Trashion</h2>
              <p>
                Trashion is our boundary-breaking fashion movement that turns trash into
                treasure. Designers and young creatives transform discarded plastic, paper,
                and waste materials into stunning wearable art — garments that carry a
                message louder than words.
              </p>
              <p>
                Each Trashion Show is a statement: that the waste crisis is real, it is
                visible, and we all have a role to play. By blending fashion with environmental
                activism, we reach audiences who might never attend a conservation talk, but
                who cannot look away from a runway.
              </p>
              <Link to="/initiatives#trashion" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  )
}
