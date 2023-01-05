import React from 'react'
import ContactForm from '../components/ContactForm'
import NavigationBar from '../components/NavigationBar'

const Contact = () => {
  return (
    <div style={{ backgroundColor:'black' }}>
        <NavigationBar/>
        <ContactForm/>
    </div>
  )
}

export default Contact