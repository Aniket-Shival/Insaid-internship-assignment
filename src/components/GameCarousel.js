import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { gameData } from '../data/gameData';

const GameCarousel = () => {

 
  return (
    <div>
     
     <Carousel fade style={{ boxShadow:'0px 10px 25px black, 0 10px 45px blue, 0 10px 40px darkblue' }}>
     {gameData.map(x=>(
      <Carousel.Item key={x.id} interval={2000}>
        <img
           style={{ maxHeight:'600px',minHeight:'600px', minWidth:'100%', objectFit:'cover'  }}
          className="d-block w-100"
          src={x.image}
          alt={x.name}
        />
        <Carousel.Caption>
          <h3>{x.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
       ))}
    </Carousel>
    </div>
  )
}

export default GameCarousel