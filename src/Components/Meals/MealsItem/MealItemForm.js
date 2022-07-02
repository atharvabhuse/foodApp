import React, { useState } from 'react'
import { useRef } from 'react'
import './MealItemForm.css'
const MealItemForm = (props) => {


    const [amountIsValid,setAmountIsValid]=useState(true);

    const amountInputRef=useRef(props);

    const submitHandler=(event)=>{
      event.preventDefault()
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber= +enteredAmount;

      if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
        setAmountIsValid(false);
      } else {
        props.onAddCart(enteredAmountNumber);
      }

    }


  return (
    <form onSubmit={submitHandler}>
    <div style={{paddingLeft: '10px'}}>
      <input ref={amountInputRef} min={1} max={5} type="number" />
      <button className='mif-button' type='submit'> Add </button>
      {!amountIsValid && <p>Enter valid input between 1 to 5</p>}
    </div>
    </form>
  )
}

export default MealItemForm
