import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', message: '' })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up form submission
    alert('Thank you! We will be in touch soon.')
    setForm({ name: '', email: '', phone: '', reason: '', message: '' })
  }

  return (
    <div className={styles.page}>
      {/* ── Left Panel ── */}
      <div className={styles.left}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.tagline}>
          We would love to speak with you.<br />
          Feel free to reach out using the details below.
        </p>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Get In Touch</h2>
          <p>+2348033030397</p>
          <p>+2348188743394</p>
          <p>info@greenfingerswi.org</p>
          <p>gfgardensng@gmail.com</p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockHeading}>Hours</h2>
          <p>Mon–Sat 9:00AM – 6:00PM</p>
          <p>Sat–Sun 12:00NOON – 6:00PM</p>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className={styles.right}>
        <p className={styles.formHeading}>
          Fill out the form below and we will<br />
          contact you as soon as possible!
        </p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <select
              className={`${styles.input} ${styles.select}`}
              name="reason"
              value={form.reason}
              onChange={handleChange}
            >
              <option value="" disabled>Book a Visit</option>
              <option value="visit">Book a Visit</option>
              <option value="volunteer">Volunteer</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
          />
          <div className={styles.submitRow}>
            <button type="submit" className={styles.sendBtn}>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

