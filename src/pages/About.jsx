import { Link } from 'react-router-dom'
import styles from './About.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

const SDG_ICONS = [
  { number: 11, alt: 'SDG 11 – Sustainable Cities and Communities', src: '/SDG Logos/Sustainable_Development_Goal_11SustainableCities.svg.png' },
  { number: 13, alt: 'SDG 13 – Climate Action',                     src: '/SDG Logos/Sustainable_Development_Goal_13Climate.svg.png' },
  { number: 14, alt: 'SDG 14 – Life Below Water',                   src: '/SDG Logos/Sustainable_Development_Goal_14LifeBelowWater.svg.png' },
  { number: 15, alt: 'SDG 15 – Life on Land',                       src: '/SDG Logos/Sustainable_Development_Goal_15LifeOnLand.svg.png' },
]

const SANCTUARY_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&q=80',
    caption: 'Visitors to the sanctuary',
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    caption: 'Kids Volunteer to be Sanctuary Keepers for a day',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    caption: 'British High Commission Visit',
  },
]

const MEDIA_LOGOS = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Africanews_logo.svg/320px-Africanews_logo.svg.png', alt: 'Africa News' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/ARISE_News_Logo.svg/320px-ARISE_News_Logo.svg.png', alt: 'ARISE News' },
]

export default function About() {
  return (
    <>
      {/* ── Background ── */}
      <section id="background" className={styles.backgroundSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Background</h2>
          <div className={styles.bgGrid}>
            <div className={styles.videoWrap}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/n4ZiM7jcCWI"
                title="The Birth of the Greenfingers Wildlife Initiative"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.bgText}>
              <p>
                Founded in 2012, we are a team of passionate individuals who are committed to
                protecting and conserving wildlife, while also raising awareness about the
                importance of our natural world. Our mission is centered around the Sustainable
                Development Goals <strong>11, 13, 14, and 15</strong>, which aim to ensure
                sustainable cities and communities, combat climate change, and protect life on
                land and in the sea.
              </p>
              <p>
                At Greenfingers, we believe that every person has the power to make a positive
                impact on the environment. We work tirelessly to promote sustainable practices,
                protect habitats, and prevent wildlife extinction. Our organization offers a range
                of projects, volunteer opportunities, educational resources, and ways to get
                involved, so that you too can make a difference in the fight against habitat
                destruction and climate change.
              </p>
              <p>Join us on our journey towards a better future for all species.</p>
            </div>
          </div>

          {/* SDG Icons */}
          <div className={styles.sdgRow}>
            {SDG_ICONS.map((s) => (
              <img key={s.number} src={s.src} alt={s.alt} className={styles.sdgIcon} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Greenfingers Sanctuary ── */}
      <section id="greenfingers-sanctuary" className={styles.sanctuarySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Greenfingers Sanctuary</h2>
          </div>
          <div className={styles.tiltGallery}>
            {SANCTUARY_PHOTOS.map((p) => (
              <div key={p.caption} className={styles.tiltCard}>
                <img src={p.src} alt={p.caption} />
                <p className={styles.tiltCaption}>{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Greenfingers Day ── */}}
      <section id="green-fingers-day" className={styles.gfdSection}>
        <div className="container">
          <div className={styles.gfdGrid}>
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt="Greenfingers Day"
              className={styles.gfdImage}
            />
            <div className={styles.gfdText}>
              <h2 className={styles.sectionHeading}>Greenfingers Day</h2>
              <p>
                Greenfingers Day is our flagship annual event — a celebration of nature,
                community, and conservation. Every year, thousands of students, volunteers,
                and wildlife enthusiasts gather to plant trees, clean up ecosystems, and learn
                about protecting the natural world.
              </p>
              <p>
                The event brings together schools, local organisations, and global partners
                to take collective action in a single day of impact. From tree-planting drives
                to wildlife talks, Greenfingers Day is a joyful reminder that small actions,
                multiplied, change the world.
              </p>
              <Link to="/contact" className="btn-primary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trashion ── */}
      <section id="trashion" className={styles.trashionSection}>
        <div className="container">
          <div className={styles.trashionGrid}>
            <div className={styles.trashionText}>
              <h2 className={styles.trashionHeading}>Trashion</h2>
              <p>
                Trashion is our boundary-breaking fashion movement that turns trash into
                treasure. Designers and young creatives transform discarded plastic, paper,
                and waste materials into stunning wearable art — garments that carry a
                message louder than words.
              </p>
              <p>
                Each Trashion Show is a statement: that the waste crisis is real, it is
                visible, and we all have a role to play. By blending fashion with environmental
                activism, we reach audiences who might never attend a conservation talk, but
                who cannot look away from a runway.
              </p>
              <Link to="/initiatives#trashion" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chinedu Mogbo ── */}
      <section id="chinedu-mogbo" className={styles.chineduSection}>
        <div className="container">
          <div className={styles.chineduGrid}>
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80"
              alt="Chinedu Mogbo"
              className={styles.chineduImage}
            />
            <div className={styles.chineduText}>
              <h2 className={styles.chineduHeading}>Meet Chinedu!</h2>
              <p>
                He is the Founder and Director of the Greenfingers Initiative. He is also an
                Educator and Academic Director of Refiners High School.
              </p>
              <p>
                His love for nature and animals has led him to create the Non-Governmental
                Organization to advocate for the degradation of the environment and extinction
                of species critical to the world's ecosystem.
              </p>
              <p>
                He has built a Wildlife Conservation Center that currently caters to over 50
                plant and animal species.
              </p>
              <p>
                As an environmentalist and wildlife enthusiast, Chinedu is a vocal part of
                conservation advocacy in Nigeria.
              </p>
              <Link to="/contact" className="btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Media Features ── */}
      <section className={styles.mediaSection}>
        <div className="container">
          <h2 className={styles.mediaHeading}>Media Features</h2>
          <div className={styles.mediaGrid}>
            {MEDIA_LOGOS.map((m) => (
              <img key={m.alt} src={m.src} alt={m.alt} className={styles.mediaLogo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Take Action ── */}
      <DonateBanner />
    </>
  )
}
