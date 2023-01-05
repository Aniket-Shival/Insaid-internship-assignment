import React from 'react'
import GameCards from '../components/GameCards'
import GameCarousel from '../components/GameCarousel'
import NavigationBar from '../components/NavigationBar'
import ShopName from '../components/ShopName'

const Home = () => {
  return (
    <div style={{ backgroundColor:'black' }} >
        <NavigationBar/>
        <GameCarousel/>
        <ShopName/>
        <GameCards/>
       
    </div>
  )
}

export default Home