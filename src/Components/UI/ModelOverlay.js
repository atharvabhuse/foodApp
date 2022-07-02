import React from 'react'
import './ModelOverlay.css'
const ModelOverlay = (props) => {
  return (
    <div className='model'>
      <div className='content'>
          {props.children}
      </div>
    </div>
  )
}

export default ModelOverlay
