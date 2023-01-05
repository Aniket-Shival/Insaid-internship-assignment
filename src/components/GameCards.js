import React from 'react'
import Card from 'react-bootstrap/Card';
import { gameData } from '../data/gameData';


const GameCards = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-3 mx-5' >
      <p className='display-5 mt-5' style={{color:'red'}}>All the popular games you can order </p>
        {gameData.map(x=>(
     <Card className='mx-3 my-5' style={{ width: '58rem',backgroundColor:'black',borderColor:'whitesmoke' }}>
      <Card.Img variant="top" src={x.image} />
      <Card.Body>
        <Card.Title style={{ color:'red' }} ><h1>{x.name}</h1></Card.Title>
        <Card.Text style={{ color:'whitesmoke' }}>Genre : {x.genres}</Card.Text>
        <Card.Text style={{ color:'whitesmoke' }}>Platform : {x.platforms}</Card.Text>
      </Card.Body>
    </Card>
         ))}
         
    </div>
  )
}

export default GameCards