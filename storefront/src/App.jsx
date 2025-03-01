import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img></img>
      <h1>Food Truck Favorites</h1>
      <Card storeName="Masala Fine Dining" type="Indian Food" link="https://www.masalafinecuisine.com/" img="assets\react.svg"/>
      <Card storeName="Jojoadventure" type="anime" link="https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series)" img="assets\react.svg"/>
      <Card storeName="Jojoadventure" type="anime" link="https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series)" img="assets\react.svg"/>
      <Card storeName="Jojoadventure" type="anime" link="https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series)" img="assets\react.svg"/>
      <Card storeName="Jojoadventure" type="anime" link="https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series)" img="assets\react.svg"/>
    </div>
  )
}

export default App
