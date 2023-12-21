import Gallery from "./Components/Gallery/Gallery"
import Footer from "./Components/Hero/Footer/Footer."
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonials"

const App = () => {
  return (
    <div className="font-quick p-8">
      <Navbar />
      <Hero />
      <Services/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App