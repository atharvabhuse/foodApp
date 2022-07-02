import React from 'react'
import './ModelBackground.css'
const ModelBackground = (props) => {

    const clickbackground=()=>{
        props.popup()
    }
  return (
     
    <div className='mb' onClick={clickbackground}>
    </div>
  )
}

export default ModelBackground
