import styles from './Sanctuary.module.css'
import DonateBanner from '../components/DonateBanner/DonateBanner'

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

export default function Sanctuary() {
  return (
    <>
      {/* ── Early Days ── */}
      <section className={styles.earlyDays}>
        <div className="container">
          <h2 className={styles.sectionHeading}>The Early Days</h2>
          <div className={styles.textBlock}>
            <p>
              The Green Fingers Conservation Center also known as the Green Fingers Sanctuary
              started in 2012. It is a place where we rescue, rehabilitate and release some of
              the most rare and endangered species in the world. Education and research of the
              wildlife and biodiversity within our sanctuary is also at the core of our objectives.
            </p>
            <p>
              Members of our team identify markets where illegal sales of some rare and endangered
              species are traded. We expose these practices through our media partners and buy some
              of these species off the hunters for rehabilitation in our conservation center. Some
              of the animals we have rescued include; African Grey Parrot, Olive Baboon, Marabou
              Stork, Pangolins, African Wolf, Bald headed vulture, Maxwells Duiker, African Civet,
              turtles and the list goes on.
            </p>
            <p>
              Our ultimate goal is to release rehabilitated animals back into the wild, where they
              belong. However, this is not always possible for some of them that may have lost their
              natural habitats or face threats from poachers or predators.
            </p>
            <p>
              Some animals have become habituated to humans or dependent on us for food. In these
              cases, we keep them in our sanctuary for research, educational and conservational
              purposes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className={styles.gallerySection}>
        <div className="container">
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

      <DonateBanner />
    </>
  )
}
