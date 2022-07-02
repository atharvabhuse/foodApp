import React, { useContext } from 'react'
import CartContext from '../../../Store/CartContext'
import MealItemForm from './MealItemForm'
import './MealsItem.css'

const MealsItem = (props) => {

  const cartCtx = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }


  return (
    <div className='mi-div'>
        <div>
            <h3>
                {props.name}
                </h3>
                <div>{props.description}</div>
                <h4 className='mi-h4'>Rs {props.price}</h4>
        </div>
        <MealItemForm id={props.id} onAddCart={addToCartHandler} />
    </div>
  )
}

export default MealsItem
