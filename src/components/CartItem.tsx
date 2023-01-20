import React from 'react'
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from '../contex/ShoppingCartContex'
import items from "../data/items.json"
import formatCurrency from '../utilities/formatCurrency'
import StoreItem from './StoreItem'


type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = items.find(i => i.id === id)
    if (item == null) return null


    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center" >
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 &&
                        <span
                            className='text-muted'
                            style={{ fontSize: '.65rem', marginLeft: '5px' }}>
                            x{quantity}
                        </span>}
                </div>
                <div
                    className='text-muted'
                    style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}
                </div>

            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>



        </Stack >

    )
}
