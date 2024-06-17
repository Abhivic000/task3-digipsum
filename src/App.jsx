import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainPg from './components/MainPg'
import InvestPlan from './components/InvestPlan'
import Testimonials from './components/Testimonials'
import InvestmentSimulator from './components/InvestmentSimulator'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <MainPg />
    <InvestPlan />
    <InvestmentSimulator />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
