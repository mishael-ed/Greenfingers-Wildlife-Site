import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const SLIDES = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    type: 'event',
    heading: 'Connect With Nature',
    sub: 'Protecting the wild places and creatures that make our world extraordinary.',
    btnLabel: 'Learn More',
    btnTo: '/initiatives',
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80',
    type: 'event',
    heading: 'Earth Day 2026',
    sub: 'Our Power, Our Planet — join us in making a difference.',
    btnLabel: 'Learn More',
    btnTo: '/initiatives',
  },
  {
    id: 4,
    bg: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920&q=80',
    type: 'event',
    heading: 'Art Meets Activism',
    sub: 'Where creativity becomes conservation.',
    btnLabel: 'Get Involved',
    btnTo: '/contact',
  },
]

const INTERVAL = 6000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }, [])

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, INTERVAL)
  }, [])

  useEffect(() => {
    startAuto()
    return () => clearInterval(timerRef.current)
  }, [startAuto])

  const handlePrev = () => { goTo(current - 1); startAuto() }
  const handleNext = () => { goTo(current + 1); startAuto() }
  const handleDot  = (i) => { goTo(i); startAuto() }

  /* keyboard support */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  /* touch / swipe */
  const touchX = useRef(null)
  const onTouchStart = (e) => { touchX.current = e.changedTouches[0].screenX }
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return
    const diff = touchX.current - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev() }
    touchX.current = null
  }

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startAuto}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero carousel"
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className={styles.slide}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <EventSlide slide={slide} />
            </div>
            <div className={styles.ctaBottom}>
              <Link to={slide.btnTo} className={styles.btnGold}>{slide.btnLabel}</Link>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.prev}`} onClick={handlePrev} aria-label="Previous">&#8249;</button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={handleNext} aria-label="Next">&#8250;</button>

      <div className={styles.dots} role="tablist">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => handleDot(i)}
          />
        ))}
      </div>
    </section>
  )
}

function EventSlide({ slide }) {
  return (
    <>
      <h1 className={styles.heading}>{slide.heading}</h1>
      <p className={styles.sub}>{slide.sub}</p>
    </>
  )
}
