import { useContext, createContext, ReactNode, useState } from "react"
import React from "react"
import  ShoppingCart  from "../components/ShoppingCart"


type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContex = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

export const ShoppingCartContex = createContext({} as ShoppingCartContex)













export function useShoppingCart() {
    return useContext(ShoppingCartContex)
}







export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity + quantity, 0)


    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function increaseCartQuantity(id: number) {
        setCartItems(currrItems => {
            if (currrItems.find(item => item.id === id) == null) {
                return [...currrItems, { id, quantity: 1 }]
            } else {
                return currrItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
        // return 0
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currrItems => {
            if (currrItems.find(item => item.id === id)?.quantity === 1) {
                return currrItems.filter(item => item.id !== id)
            } else {
                return currrItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    return (
        <ShoppingCartContex.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart, closeCart,
                cartItems,
                cartQuantity
            }}>
            {children}
            {/* <ShoppingCart/>git remote add origin  */}
        </ShoppingCartContex.Provider>
    )
}