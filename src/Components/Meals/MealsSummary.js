import React, { useRef } from 'react'
import './MealsSummary.css'

const MealsSummary = () => {

  const imgElement=useRef()

  const msp=useRef()

  // const msb=useRef()

  window.addEventListener('scroll',()=>{
    let value=window.scrollY
    imgElement.current.style.left=value * 3 + 'px'
    msp.current.style.top=value * 0.1 + 'px'
    msp.current.style.right=value * 0.05 + 'px'
  })

  return (
    <>
    <div ref={msp} className='ms-div' >
      <p  className='ms-p'>
        <b>FRESH AND SUPER DELICIOUS FOOD NOW WITH 4 NEW ADDED DISHES</b>
      </p>
      <p  className='ms-b'>
        <b >THIS WEEKEND ONLY</b>
      </p>
      <img ref={imgElement} className='ms-img' src='Lovepik_com-400180038-chef-chef.png' />
    </div>
    </>
  )
}

export default MealsSummary

