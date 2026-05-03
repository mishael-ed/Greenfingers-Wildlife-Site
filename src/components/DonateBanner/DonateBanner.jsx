import styles from './DonateBanner.module.css'

export default function DonateBanner() {
  return (
    <section className={styles.banner}>
      <img
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
        alt="Animals on a farm"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.textCol}>
        <h2 className={styles.heading}>Take Action Today</h2>
        <p className={styles.sub}>
          Join the Greenfingers volunteer network on whatsapp by clicking on the button below
        </p>
        <a
          href="https://wa.me/"
          className={styles.btn}
          target="_blank"
          rel="noreferrer noopener"
        >
          Join Now
        </a>
      </div>
    </section>
  )
}
