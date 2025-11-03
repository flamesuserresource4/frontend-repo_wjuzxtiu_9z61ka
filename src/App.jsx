import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsCTA from './components/TestimonialsCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsCTA />
      </main>
      <footer id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-slate-600">© {new Date().getFullYear()} G7KAIH. All rights reserved.</div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-600 hover:text-[#0A2540]">Privacy Policy</a>
              <a href="#terms" className="text-slate-600 hover:text-[#0A2540]">Terms & Conditions</a>
              <a href="#contact" className="text-slate-600 hover:text-[#0A2540]">Contact Us</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
