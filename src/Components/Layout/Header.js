import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import './Header.css'
const Header = (props) => {

    
    return (
        <div style={{position: 'sticky',top: 0,zIndex: 10}}>
            <header>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">GreenPark Restaurant</a>
                        <HeaderCartButton onpopups={props.onpopup} />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
