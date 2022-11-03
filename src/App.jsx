import './App.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data"
// import myImg from './images/katiezaferes.png'

// export default function App() {

//   const appCard = data.map(card => {
//     return (
//       <div key={card.id}>
//         <Card title={card.title} price={card.price} rating={card.stats.rating} reviewCount={card.stats.reviewCount} text={card.description} location={card.location}  openspots={card.openSpots}  />
//       </div>
//   )})

//   return(
//     <div>
//     <Navbar />
//     <Hero />
//     {appCard}
//     </div>
//     )
//   }

export default function App() {
  const cardElements = data.map(item=> {
      return (
          <Card 
              key = {item.id}
              item= {item}
          />
      )
  })
  return (
      <div className="app--container">
          <Navbar />
          <Hero />
          <section className="cards--list">
              {cardElements}
          </section>
      </div>

  )
}
