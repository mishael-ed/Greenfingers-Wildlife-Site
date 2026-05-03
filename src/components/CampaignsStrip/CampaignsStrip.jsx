import styles from './CampaignsStrip.module.css'

const LOGOS = [
  '/campaign%20logos%20white/39Artboard%206.png',
  '/campaign%20logos%20white/39Artboard%207.png',
  '/campaign%20logos%20white/39Artboard%208.png',
]

export default function CampaignsStrip() {
  return (
    <div className={styles.strip}>
      {LOGOS.map((src, i) => (
        <div key={i} className={styles.logo}>
          <img src={src} alt={`Campaign logo ${i + 1}`} className={styles.img} />
        </div>
      ))}
    </div>
  )
}
