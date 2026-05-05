import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <img src="/logo.png" alt="Greenfingers Wildlife Conservation Initiative" className={styles.logoImg} />
  </Link>
)

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Background', to: '/about#background' },
      { label: 'Greenfingers Sanctuary', to: '/about#greenfingers-sanctuary' },
      { label: 'Greenfingers Day', to: '/about#green-fingers-day' },
      { label: 'Trashion', to: '/about#trashion' },
      { label: 'Chinedu Mogbo', to: '/about#chinedu-mogbo' },
    ],
  },
  {
    label: 'Our Initiatives',
    children: [
      { label: 'Events and News', to: '/initiatives#events-and-news' },
      { label: 'Wildlife Warriors', to: '/initiatives#wildlife-warriors' },
      { label: 'Comics', to: '/initiatives#comics' },
      { label: 'Change Makers', to: '/initiatives#change-makers' },
      { label: 'Ocean Heroes', to: '/initiatives#ocean-heroes' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [openDrop, setOpenDrop]   = useState(null)
  const navRef                    = useRef(null)
  const closeTimer                = useRef(null)

  const openDropDelayed  = (label) => {
    clearTimeout(closeTimer.current)
    setOpenDrop(label)
  }
  const closeDropDelayed = () => {
    closeTimer.current = setTimeout(() => setOpenDrop(null), 200)
  }

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
        setOpenDrop(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleMenu  = () => setMenuOpen(v => !v)
  const toggleDrop  = (label) => setOpenDrop(v => v === label ? null : label)
  const closeAll    = () => { setMenuOpen(false); setOpenDrop(null) }

  const isMobile = () => window.innerWidth <= 768

  const location = useLocation()
  const isParentActive = (item) =>
    item.children?.some((child) => location.pathname === child.to.split('#')[0])

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <Logo />

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none" aria-hidden="true" className={styles.hamburgerIcon}>
            <path d="M1 4 C5 1.5 9 6.5 13 4 C17 1.5 21 6.5 25 4 C27 3 29 3 29.5 4" stroke="#e6a817" strokeWidth="2.4" strokeLinecap="round"/>
            <line x1="1" y1="11" x2="29" y2="11" stroke="#e6a817" strokeWidth="2.4" strokeLinecap="round"/>
            <path d="M1 18 C5 15.5 9 20.5 13 18 C17 15.5 21 20.5 25 18 C27 17 29 17 29.5 18" stroke="#e6a817" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Nav links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className={`${styles.dropdown} ${openDrop === item.label ? styles.dropOpen : ''}`}
              >
                <button
                  className={`${styles.dropBtn} ${isParentActive(item) ? styles.active : ''}`}
                  onClick={() => {
                    if (isMobile()) toggleDrop(item.label)
                  }}
                  onMouseEnter={() => !isMobile() && openDropDelayed(item.label)}
                  onMouseLeave={() => !isMobile() && closeDropDelayed()}
                  aria-haspopup="true"
                  aria-expanded={openDrop === item.label}
                >
                  {item.label} <span className={styles.arrow}>▾</span>
                </button>
                <ul
                  className={styles.dropMenu}
                  onMouseEnter={() => !isMobile() && openDropDelayed(item.label)}
                  onMouseLeave={() => !isMobile() && closeDropDelayed()}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link to={child.to} onClick={closeAll}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeAll}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
          <li>
            <NavLink to="/donate" className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')} onClick={closeAll}>Donate</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
