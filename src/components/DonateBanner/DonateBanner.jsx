import { Link } from 'react-router-dom'
import styles from './DonateBanner.module.css'

export default function DonateBanner() {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2>Every Rand Makes a Difference</h2>
          <p>
            Your donation goes directly to our conservation projects, education programmes,
            and the communities protecting wildlife every day.
          </p>
        </div>
        <Link to="/donate" className={styles.btn}>Donate Now</Link>
      </div>
    </section>
  )
}
