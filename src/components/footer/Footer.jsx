import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left"> 
             <img src="./image/asset 11.png" alt="footer" width={120} />

             <span className="secondaryText">
                Our Vision is to make all people <br /> the best place to live for them
             </span>
             </div>
             {/* About address */}
               {/* right side */}
               <div className="flexColStart f-right">
                <span className='primaryText' >Information...</span>
                <span className='secondaryText' >110001 New Delhi FL 467, IND</span>
                <div className="flexCenter f-menu">
                      <span>Property</span>
                      <span>Services</span>
                      <span>Product</span>
                      <span>About US</span>
                </div>
             </div>

             {/* Sonu details */}

              <div className="flexColStart f-right">
                <span className='primaryText' >Sonu Kumar</span>
                <span  >sksonu8544@gmail.com</span>
                <div className="flexCenter f-menu">
                      {/* <span>+91- 8544098398</span> */}
                      <span>https://www.linkedin.com/in/8544-sonukumar/</span>
                     
                </div>
             </div> 

           
        </div>
    </section>
  )
}

export default Footer