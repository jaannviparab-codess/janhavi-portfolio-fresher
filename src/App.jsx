import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import JobSimulations from './sections/JobSimulations'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import CurrentlyLearning from './sections/CurrentlyLearning'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JobSimulations />
        <Education />
        <Certifications />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
