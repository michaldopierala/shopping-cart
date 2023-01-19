import { createContext, ReactNode, useState } from 'react'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContex = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export const ShoppingCartContex = createContext({} as ShoppingCartContex)

// const [cartItems, setCartItems] = useState<CartItem[]>([])    --- hook must be called inside function 



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContex.Provider value="g">
            {children}
        </ShoppingCartContex.Provider>
    )
  }