import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Sanctuary from './pages/Sanctuary'
import GreenfingersDay from './pages/GreenfingersDay'
import Initiatives from './pages/Initiatives'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sanctuary" element={<Sanctuary />} />
          <Route path="/greenfingers-day" element={<GreenfingersDay />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
