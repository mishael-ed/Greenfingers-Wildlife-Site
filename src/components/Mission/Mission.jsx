import { Link } from 'react-router-dom'
import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={`section-heading ${styles.heading}`}>
          Welcome to Greenfingers Wildlife Conservation Initiative
        </h2>
        <p className={styles.subheader}>A Little Background</p>
        <div className={styles.grid}>

          <div className={styles.text}>
            <p>
              Our mission has its core in line with the Sustainable Development Goals
              <strong> 11, 13, 14, and 15</strong>.
            </p>
            <p>
              We exist to protect and conserve wildlife, while also promoting awareness and
              education about the importance of our natural world. We believe that every
              individual can make a difference in the fight against habitat destruction,
              climate change, and wildlife extinction.
            </p>
            <p>
              Our organisation is dedicated to working towards a better future for all
              species, and we invite you to join us in our efforts. Keep exploring to learn
              more about our projects, volunteer opportunities, educational resources, and
              ways to get involved.
            </p>
            <Link to="/about" className="btn-primary">Learn More</Link>
          </div>

          <div className={styles.videoWrap}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/n4ZiM7jcCWI"
              title="Greenfingers Wildlife Conservation Initiative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  )
}
