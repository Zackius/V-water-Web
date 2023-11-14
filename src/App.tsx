import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"

const App = () => {
  return (
    <div className="font-quick">
      <Navbar />
      <Hero />
      <Services/>
    </div>
  )
}

export default App