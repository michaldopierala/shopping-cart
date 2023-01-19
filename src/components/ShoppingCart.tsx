import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export default function ShoppingCart() {
  return (
    <Offcanvas show={true} placement="end"> 
       <Offcanvas.Header closeButton>
close
       </Offcanvas.Header>
    </Offcanvas>
  )
}


// onHide={cartClose} 