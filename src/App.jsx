import './styles/App.sass'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualify from './components/qualify/Qualify'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'

function App() {
  return (
    <div>
      <Header/>
      <main className="main">
        <Home/>
        <About />
        <Skills />
        <Services />
        <Qualify />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
