import React, { useReducer } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {

    const defaultCartReducer = {
        items: [],
        totalAmount: 0
    }

    const cartReducer = (state, action) => {
        if (action.type == 'ADD') {
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
              items: updatedItems,
              totalAmount: updatedTotalAmount
            };
          }
          return defaultCartReducer;
        };

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartReducer)

    const addItemFromCartHandler = (item) => {
        cartContext.items.push(item);
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <div>
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider
