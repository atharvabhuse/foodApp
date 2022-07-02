import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div style={{ top: '-15px',
        position: 'relative'}}>
       <div class="footer-dark">
        <footer>
            <div class="container"  style={{height: '300px',position: 'relative'}}>
                <div class="row">
                    <div class="col-sm-6 col-md-3 item" style={{width: '25%',position: 'relative'}}>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item"  style={{width: '25%',position: 'relative'}}>
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text"  style={{width: '25%',position: 'relative'}}>
                        <h3>Atharva the Great</h3>
                        <p>nkjnckjdanckjda  jda ckjda ka ckda caca ckjda ckdac dan anjcndakjcnda  ckjda c akj ckjadc kjdass nhdbs i  jnlznz z kjzk</p>
                    </div>
                    <div  class="col-sm-6 col-md-3 item">
                        <div style={{width: '100px',position: 'relative'}}>
                        <img src='account-normal.png'/>
                        </div>
                    </div>
                </div>
                <p class="copyright">Atharva the Great © 2022</p>
            </div>
        </footer>
    </div>
   
    </div>
  )
}

export default Footer
