import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import Mission from '../components/Mission/Mission'
import CampaignsStrip from '../components/CampaignsStrip/CampaignsStrip'
import ArtivismSection from '../components/ArtivismSection/ArtivismSection'
import ArtivismBanner from '../components/ArtivismBanner/ArtivsimBanner'
import InitiativesGrid from '../components/InitiativesGrid/InitiativesGrid'
import DonateBanner from '../components/DonateBanner/DonateBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <CampaignsStrip />
      <ArtivismSection />
      <ArtivismBanner />
      <InitiativesGrid />
      <DonateBanner />
    </>
  )
}
