import './App.css';
import React from "react"
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data"


function App() {
  const cardElements = data.map(data => {
    return (<Card 
      key={data.id}
      item={data} />)

  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
