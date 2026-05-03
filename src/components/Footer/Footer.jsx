import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>

        {/* Col 1 — Logo */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <img src="/logo.png" alt="Green Fingers" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Green Fingers</span>
              <span className={styles.logoSub}>Wildlife Conservation Initiative</span>
            </div>
          </Link>
        </div>

        {/* Col 2 — Description */}
        <div className={styles.desc}>
          <p>We are a Non-Governmental Organization focused on Wildlife and Environmental Conservation.</p>
        </div>

        {/* Col 3 — Visit Us */}
        <div className={styles.visit}>
          <h4 className={styles.colHeading}>Visit Us</h4>
          <div className={styles.contactItem}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <p>10 Emmanuel Iroabuchi Street, Thera-Annex Estate, Off Lekki-Epe, Express Way, Lagos, Nigeria.</p>
          </div>
          <div className={styles.contactItem}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/></svg>
            <a href="tel:+2348188743394">+2348188743394</a>
          </div>
          <div className={styles.contactItem}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <a href="mailto:info@greenfingerswi.org">info@greenfingerswi.org</a>
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div className={styles.newsletter}>
          <h4 className={styles.colHeading}>Join The club</h4>
          <p className={styles.newsletterDesc}>Get updates on special events and programs</p>
          <div className={styles.subscribeRow}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.emailInput}
            />
            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; All Rights Reserved Greenfingers 2023.</p>
        </div>
      </div>
    </footer>
  )
}
