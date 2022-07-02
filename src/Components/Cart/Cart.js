import React from 'react'
import Model from '../UI/Model'
import './Cart.css'
const Cart = (props) => {

    return (
        <Model popup={props.popup}>
            <div>
                <h3></h3>
                <p>Total Amount</p>
                <h4></h4>
                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                    <div style={{ padding: '5px' }}>

                        <button className='cart-button1' onClick={props.close}>Close</button>
                    </div>
                    <div style={{ padding: '5px' }}>
                        <button className='cart-button2'>Order</button>
                    </div>
                </div>
            </div>
        </Model>
    )
}

export default Cart
