import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonials"

const App = () => {
  return (
    <div className="font-quick">
      <Navbar />
      <Hero />
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default App