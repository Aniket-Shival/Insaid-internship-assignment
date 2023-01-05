import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaAddressCard} from 'react-icons/fa'


const ContactForm = () => {
    return (
        <div >
            <p style={{ color: 'whitesmoke' }} className='display-1 d-flex justify-content-center my-5'>For Queries and Home Delivery</p>
            <Container style={{paddingBottom:'300px' }}>
                <div className='mx-5 my-5' style={{ backgroundColor: 'rgb(33,37,41)', borderRadius:'20px'}} >
                    <Row >
                        <Col lg={4}>
                            <div  style={{ backgroundColor:'rgb(0, 102, 204)', color:'whitesmoke' , borderRadius:'10px' }}>
                                  <h1 className='mt-5 mx-4 pt-2'>Game Shop</h1>
                                  <h5 className='mt-5 mx-4' style={{ wordWrap:'break-word' }}><MdOutlineMailOutline/> contact@gameshop.in</h5>
                                  <h5 className='mt-3 mx-4'><FaAddressCard/> 2, street no. 5, Gaming Nagar, Jalandhar</h5>
                                  <h5 className='mt-3 mx-4'>Punjab</h5>
                                  <h5 className='mt-3 mb-5 mx-4 pb-2'>India</h5>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Form className='my-5 mx-2  '>
                                <Form.Group  controlId="formBasicEmail">
                                    <Form.Label style={{ color:'white' }}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 mt-3">
                                    <Form.Label style={{ color:'white' }}>Query or Message</Form.Label>
                                    <Form.Control as='textarea' rows={5} placeholder="query or message" />
                                </Form.Group>
                                <Button className='mt-1' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm