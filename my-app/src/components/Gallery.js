import React, { Component } from 'react'
import { auth } from '../helpers/auth'
import '../css/Gallery.css';
import '../bulma/css/bulma.css'

import icon from '../lithops icon.png'
function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Gallery extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div>
     <section className="hero is-bold is-medium">
        <div className="containter">
          <h1 className="title">
            Photo Gallery
          </h1>
          <h2 className="subtitle">
           <a href="https://www.gardeningknowhow.com/ornamental/cacti-succulents/lithop/growing-living-stone-plants.htm">Photo resource from this website</a> 
          
          </h2>
          
          <div className="title is-ancestor">
            <div className="title is-vertical is-8">
              <div className="title">
                <div className="title is-parent is-vertical">
                  <article className="title is-child box">
                    <img src={icon} alt="icon"/>
                  </article>
                 
                </div>
                 <div className="title is-parent is-vertical">
                  <article className="title is-child box">
                     <img src="http://www.lithops.net/images/Lithops_photos/Liau%201.JPG" alt="icon"/>
                  </article>
                  <article className="title is-child box"> 
                  
                     <img src="http://www.lithops.net/images/Lithops_photos/Litauc-Kuru4648.JPG" alt="icon"/>
                  
                  </article>
            
                </div>
                 <div className="title is-parent is-vertical">
                  <article className="title is-child box">
                  
                     <img src="  http://www.lithops.net/images/Lithops_photos/Libr%20in%20flr6.JPG" alt="icon"/>
                  </article>
                  <article className="title is-child box"> 
                  
                     <img src="http://www.lithops.net/images/Lithops_photos/Lithoover5553.JPG" alt="icon"/>
                  
                 </article>
            
                </div>
            
              </div>
          
            </div>
        </div>    
       </div>
       <div className="hero-foot">
                
      </div>
    </section>
    </div>
    )
  }
}
