import {  createContext, useState } from "react";

export const CartContext = createContext ({})

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addToCart = (item, quantity) => {
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            setCart([itemToAdd])
            return
        }
        const itemDuplicateIndex = cart.findIndex((itemInTheCart) => itemInTheCart.id === item.id)
        if (itemDuplicateIndex >= 0) {
            const itemToUpdate = {
                ...item,
                quantity: cart[itemDuplicateIndex].quantity + quantity
            
            }
            const cartDraft = [...cart]

            cartDraft[itemDuplicateIndex] = itemToUpdate

            setCart (cartDraft)
        } else {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }

            const cartDraft = [...cart, itemToAdd]

            setCart (cartDraft)
        }
    }

    const clear = () => {
        setCart ([])
    }

    const removeItem = (id) => {
        const smallerCartDraft = cart.filter (data => data.id !== id)
        setCart (smallerCartDraft)
    }

    const cartSize = () => {
        return cart.reduce ((acc, item) => acc += item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce ((acc, item) => acc += item.price * item.quantity, 0)

    }

    return (
        <CartContext.Provider value ={{ cart, addToCart, clear, removeItem, cartSize, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider