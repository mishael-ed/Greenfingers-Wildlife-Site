import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const STATS = [
  { target: 15,    label: 'Years of Impact',   suffix: '' },
  { target: 300,   label: 'Volunteers',          suffix: '+' },
  { target: 3000,  label: 'Animals Rescued',     suffix: '+' },
  { target: 500,   label: 'Animals Released',    suffix: '+' },
  { target: 12000, label: 'Students Reached',    suffix: '+' },
]

function useCountUp(target, active, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ target, label, suffix, active }) {
  const count = useCountUp(target, active)
  return (
    <div className={styles.item}>
      <span className={styles.number}>{count.toLocaleString()}{active ? suffix : ''}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.strip} ref={ref}>
      <div className={styles.inner}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.cell}>
            <StatItem {...s} active={active} />
          </div>
        ))}
      </div>
    </section>
  )
}
