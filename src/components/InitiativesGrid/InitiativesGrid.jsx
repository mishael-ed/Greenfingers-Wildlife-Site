import { Link } from 'react-router-dom'
import styles from './InitiativesGrid.module.css'

export default function InitiativesGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Greenfingers Wildlife Sanctuary</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              The Green Fingers Sanctuary also known as the Green Fingers Conservation Center
              provides shelter to over 50 animal species.
            </p>
            <p>
              80% of the animals being cared for at the sanctuary are endangered species rescued
              from illegal animal trading markets.
            </p>
            <p>
              In this report on Arise News about the illegal trade of African Grey Parrots, our
              founder explains how severe the situation is and how the rehabilitation of captured
              endangered species happens at the sanctuary.
            </p>
            <p>The Sanctuary is also open to tourists and animal enthusiasts to explore for educational purposes.</p>
            <p>Click to learn more about the sanctuary.</p>
            <Link to="/initiatives#sanctuary" className="btn-primary">Learn More</Link>
          </div>
          <div className={styles.videoWrap}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/jPcepk1sCw4"
              title="Greenfingers Wildlife Sanctuary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
