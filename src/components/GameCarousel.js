import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { gameData } from '../data/gameData';

const GameCarousel = () => {

 
  return (
    <div>
     
     <Carousel fade>
     {gameData.map(x=>(
      <Carousel.Item interval={2000}>
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