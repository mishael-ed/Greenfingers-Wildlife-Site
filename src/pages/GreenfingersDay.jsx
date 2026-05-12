import styles from './GreenfingersDay.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

export default function GreenfingersDay() {
  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Greenfingers Day</h2>
          <h3 className={styles.subheading}>What is Greenfingers Day About?</h3>
          <div className={styles.textBlock}>
            <p>
              It is the largest annual event on wildlife and environmental conscious advocacy
              in Nigeria. It features a tour of the Greenfingers Sanctuary, Art Shows,
              Conversations and awareness about notable wildlife and Environmental conservation
              concerns.
            </p>
            <p>
              Our goal is to raise awareness about the critical importance of environmental and
              animal conservation to inspire action toward a healthier and more sustainable
              future for our planet.
            </p>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  )
}
