import React from 'react'
import './Model.css'
import  ReactDOM  from 'react-dom'
import ModelBackground from './ModelBackground'
import ModelOverlay from './ModelOverlay'
const Model = (props) => {


  return (
    <div>
      {
          ReactDOM.createPortal(<ModelBackground popup={props.popup} />,document.getElementById('overlay'))
      }
      {
          ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,document.getElementById('overlay'))
      }
    </div>
  )
}

export default Model
