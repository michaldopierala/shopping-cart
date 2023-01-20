import React, { useContext } from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { ShoppingCartContex } from '../contex/ShoppingCartContex'
import { useShoppingCart } from '../contex/ShoppingCartContex'
import CartItem from '../components/CartItem'
import formatCurrency from '../utilities/formatCurrency'
import items from "../data/items.json"
import 'bootstrap/dist/css/bootstrap.min.css';



// import { CartItem} from 


type ShoppingCartProps = {
  isOpen: boolean
}

export default function ShoppingCart({ isOpen }) {

  // const {cartClose} = useContext(ShoppingCartContex)
  const { closeCart, cartItems } = useShoppingCart()


  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        Cart
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item =>
            // <div key={item.id} > {item.id}</div>
            <CartItem key={item.id} {...item} />
          )}

        </Stack>
        <div className="float-end fw-bold fs-5" style={{marginTop:'30px'}}>
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}


// onHide={cartClose} 