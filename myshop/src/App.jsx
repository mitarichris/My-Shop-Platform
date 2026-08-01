import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
