import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
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
      { label: 'Who We Are', to: '/about' },
      { label: 'Our Mission', to: '/about#mission' },
      { label: 'Our Team', to: '/about#team' },
    ],
  },
  {
    label: 'Our Initiatives',
    children: [
      { label: 'All Initiatives', to: '/initiatives' },
      { label: '#Artivism', to: '/initiatives#artivism' },
      { label: 'Education', to: '/initiatives#education' },
      { label: 'Conservation', to: '/initiatives#conservation' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [openDrop, setOpenDrop]   = useState(null)
  const navRef                    = useRef(null)

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
          <img src="/bird in hand ring logo.png" alt="Menu" className={styles.hamburgerLogo} />
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
                  className={styles.dropBtn}
                  onClick={() => {
                    if (isMobile()) toggleDrop(item.label)
                  }}
                  onMouseEnter={() => !isMobile() && setOpenDrop(item.label)}
                  onMouseLeave={() => !isMobile() && setOpenDrop(null)}
                  aria-haspopup="true"
                  aria-expanded={openDrop === item.label}
                >
                  {item.label} <span className={styles.arrow}>▾</span>
                </button>
                <ul
                  className={styles.dropMenu}
                  onMouseEnter={() => !isMobile() && setOpenDrop(item.label)}
                  onMouseLeave={() => !isMobile() && setOpenDrop(null)}
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
