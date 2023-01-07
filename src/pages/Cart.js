import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import NavigationBar from '../components/NavigationBar';
import { actionCreators } from '../state/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = () => {

  const hoverFunc=(e)=>{
    e.target.style.color = 'yellow'

 }
 const removeFunc=(e)=>{
   e.target.style.color= '#0d6efd'
 }
  
    const cartData = useSelector((state)=> state.cartR)
   
    const dispatch = useDispatch()

    const {cartEmptyFunc} = bindActionCreators(actionCreators,dispatch)
    
  
  const sumFunc=()=>{
    var Total =0;
    let arr =cartData.map(x=>x.price)
    for(let i=0;i<arr.length;i++){
      Total=Total+parseInt(arr[i],10)
    }
    console.log('Total',Total)
    return Total
  }

  return (
    <div className='pb-5' style={{ backgroundColor:'black',minHeight:'100vh' ,width:'100vw' }}>
      <NavigationBar/>
      <div className='display-1 d-flex justify-content-center my-5' style={{color:'whitesmoke'}}>Cart</div>
      
       {cartData.length<1?<div className='display-5 d-flex justify-content-center' style={{color:'whitesmoke'}}>Total : ₹ 0</div>:
        <div className='display-5 d-flex justify-content-center my-5' style={{color:'whitesmoke'}}>Total : ₹ {sumFunc()}</div>
       }
        <div className='d-flex justify-content-center mx-3 mt-5 mb-3 '>
        <Button className='mx-3' variant="outline-warning">Buy</Button>
        <Button className='mx-3' onClick={()=>cartEmptyFunc()} onMouseOver={hoverFunc} onMouseLeave={removeFunc}  style={{ textDecoration:'none', fontSize:'20px', fontWeight:'bold' }} variant="link">Empty Cart</Button>
        </div>
        {cartData.length<1?'':
        cartData.map(x=>(
<div key={x.id} className='d-flex justify-content-center'>
<Card key={x.id} className='mx-3 my-2'  style={{ width: '48rem',height:'8.5rem',backgroundColor:'black', borderColor:'white', borderWidth:'2px' }}>
        <Row>
          <Col sm={4} xs={6}>
          <Card.Img style={{maxHeight:'8.4rem', minHeight:'8.4rem'}} variant="top" src={x.image} />
          </Col>
          <Col sm={8} xs={6}>
          <Card.Body>
  <Card.Title style={{color:'whitesmoke'}}>{x.name}</Card.Title>
  <Card.Text style={{color:'whitesmoke'}}>
  ₹ {x.price}
  </Card.Text>
</Card.Body>
          </Col>
        </Row>
        </Card>
        </div>
        ))}
       
     
    </div>
  )
}

export default Cart