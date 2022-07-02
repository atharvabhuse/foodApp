import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './HeaderCartButton.css'
import CartContext from '../../Store/CartContext'
const HeaderCartButton = (props) => {

  const cart = () => {
    props.onpopups()
  }

  const cartCtx = useContext(CartContext)

  console.log('CTX: ', cartCtx);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => { 
    return currentNumber+ item.amount
   }, 0)

  return (
    <button className='hcb-button' onClick={cart}>
      <span>
      <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/0845c232253239.56766f2d063c9.gif' style={{width: '45px',height: '45px'}} />
      </span>
      <span className='hcb-span'>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
