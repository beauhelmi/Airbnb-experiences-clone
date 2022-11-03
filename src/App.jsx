import './App.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Card from './components/Card'
import myImg from './images/katiezaferes.png'

export default function App() {
  return(
    <div>
    <Navbar />
    <Hero />
    <Card
    img={myImg}
    rating="5.0"
    reviewCount={6}
    country="MALAYSIA"
    title="Life Lessons with Katie Zaferes"
    price={136}
    />
    </div>
    )
  }