// src/App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // Contenedor principal para aplicar estilos de fondo
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
