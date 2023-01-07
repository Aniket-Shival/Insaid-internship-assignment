import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { gameData } from '../data/gameData';
import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { useSelector } from 'react-redux';


const GameCards = () => {



  const hoverFunc=(e)=>{
    e.target.style.color = 'yellow'

 }
 const removeFunc=(e)=>{
   e.target.style.color= '#0d6efd'
 }


 
 const dispatch = useDispatch()
 const {detailFunc} = bindActionCreators(actionCreators,dispatch)
 const {cartFunc} = bindActionCreators(actionCreators,dispatch)

 console.log("home",useSelector((state)=>state))

  return (
    <div>
       <p className='display-5 mt-5 d-flex flex-wrap justify-content-center mx-5' style={{color:'red'}}>All the popular games you can order </p>
    <div className='d-flex flex-wrap justify-content-center mt-3 mx-5' >
     
        {gameData.map(x=>(
     <Card key={x.id} className='mx-3 my-5' style={{ width: '58rem',backgroundColor:'black',borderColor:'whitesmoke',boxShadow:'0px 10px 15px black, 0 10px 25px blue, 0 10px 30px darkblue' }}>
      <Card.Img variant="top"  src={x.image} />
      <Card.Body>
        <Card.Title style={{ color:'red' }} ><h1>{x.name}</h1></Card.Title>
        <Card.Text style={{ color:'whitesmoke' }}>Genre : {x.genres}</Card.Text>
        <Card.Text style={{ color:'whitesmoke' }}>Platform : {x.platforms}</Card.Text>
        <Button onClick={()=>cartFunc(x)} className='mx-2' variant="outline-warning">Add to Cart</Button>
        <Link to='/details'><Button onClick={()=>detailFunc(x)} className='mx-2' style={{ textDecoration:'none', fontSize:'20px', fontWeight:'bold' }} onMouseOver={hoverFunc} onMouseLeave={removeFunc}  variant="link">Details</Button></Link>
       
      </Card.Body>
    </Card>
         ))}
         
    </div>
    
    

    </div>
  )
}

export default GameCards