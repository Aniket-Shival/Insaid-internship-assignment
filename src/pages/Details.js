import React from 'react'
import { useSelector } from 'react-redux'
import NavigationBar from '../components/NavigationBar'
import Card from 'react-bootstrap/Card';
import {Rating} from 'react-simple-star-rating'

const Details = () => {

    const details = useSelector((state)=> state.details)
   
    

  return (
    <div className='pb-5' style={{ backgroundColor:'black',minHeight:'110vh', maxHeight:'110%' ,width:'100vw' }}>
        <NavigationBar/>
        <div className=" d-flex justify-content-center mt-3">
        <Card style={{maxWidth:'90vw',borderWidth:'2px'}} className=" d-flex justify-content-center mt-3">
        <img    src={details.image}  alt={details.name}/>
        </Card>
        </div>
        <div style={{color:'whitesmoke'}} className='display-3 d-flex text-center justify-content-center mt-5 mb-3 mx-5'>{details.name}</div>
       
       <div className=" d-flex justify-content-center mt-3 mx-2" >
        <div  className=" d-flex justify-content-center flex-wrap my-3 " style={{ backgroundColor:'black', maxWidth:'35vW', minWidth:'35vW'}}>
          <div  className=" d-flex flex-wrap justify-content-around my-3 text-center" style={{ backgroundColor:'black', maxWidth:'35vW', minWidth:'35vW'}}>
                <div className='mx-4' style={{color:'whitesmoke', fontSize:'25px'}}>IGN Ratings</div> 
               <div className='mx-4'> <Rating readonly={true} allowFraction={true} initialValue={parseInt(details.ign)} emptyColor='rgb(10,10,10)' /></div>     
          </div>  
          <div  className=" d-flex flex-wrap justify-content-around   mt-3 text-center" style={{ backgroundColor:'black', maxWidth:'35vW', minWidth:'35vW'}}>
                <div className='mx-4' style={{color:'whitesmoke', fontSize:'25px'}}>Metacritic</div> 
               <div className='mx-4' style={{color:'whitesmoke', fontSize:'25px'}}>{details.mc}</div>     
          </div>  
        </div>
        </div>

        <div style={{color:'whitesmoke'}} className='display-6 d-flex text-center justify-content-center mt-5 mb-3 mx-5'>{details.summary}</div>
        
       
    </div>
  )
}

export default Details