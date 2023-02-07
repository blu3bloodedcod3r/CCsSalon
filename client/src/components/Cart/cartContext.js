/// Create Context from React. Context allows cart data, e.g. id, quantities, functions that can be called anywhere in the program
/// Is this going to be the same or similar to the Global context file? 

import { createContext, useState } from 'react'
import { services, getServiceData } from '../../pages/Services' // If I move this file this will have to be updated. And do I use services or the servicespages?
// Example: It's called productsArray



export const cartContext = createContext({
    items: [],
    // Create properties
    getProductQuantity: () => {}, // empty arrow function w/ no logic. Functions are not defined in the context. The context says the function can be defined
    addOnetoCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {} // helper function
})

export function CartProvider({children}) {
    // Create a state that is specific to the provider
    const [cartProducts, setCartProducts] = useState([]) // equal to a useState with an empty array. The cartProducts state will manipulate what the provider is giving to the rest of the application.

    // { id: 1, quantity: 2 } -- cart info to be stored

    function getProductQuantity(id) {
        // Is the product.id equal to the id passed into the function
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        // ? if .find gives us an undefined object (no product the id), then we won't ask for the quantity. But if .find becomes an object w/ data (id = 1), then we'll get the quantity property.
        // The id value (ex. 1) is passed into the cartProducts array. If there is a product with id = 1, then we will get the products entire array, but the quantity is the only thing that will be returned.

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id                               // if condition
                    ? { ...product, quantity: product.quantity + 1} // if statement is true
                    : product // product object                     // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id                               // if condition
                    ? { ...product, quantity: product.quantity - 1} // if statement is true
                    : product // product object                     // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] starts w/ an empty array if an object meets a condition, add the object to the array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            }) 
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const serviceData = getServiceData(cartItem.id)
            totalCost += (serviceData.price * cartItem.quantity)
        })

    }

    // Define the value and functions of the context
    // Once defined these functions can be accessed throughtout the app because they're defined below in the value={contextValue}
    const contextValue = {
        items: cartProducts, // items will be equal to a state, this is an empty array
        getProductQuantity, 
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
// To access the CartProvider globally, the CartProvider needs to be wrapped around the entire application

// If <CartProvider> is wrapped, then it gives access to all the children in the element.
// The children is everything inside the cartContext.Provider 
// If children is called, then does it not pass to the children


// Context (cart, addToCart, removeCart)
// Provider gives React app access to all things in the context. If you wanted to addToCart
// Initialized by creating an object in the createContext
