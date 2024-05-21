import React from 'react'
import './Welcome.scss'
function Welcome() {
  return (
    
    <section >
    <div className="container py-5">
      <div className='row'>
        <div className='col-lg-6 g-3'>
          <p>OUR STORY
          </p>
          <h2>Welcome
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <button>Learn More About us</button>
        </div>
        <div className='col-lg-6 g-3'>
          <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
        </div>
      </div>
    </div>
    </section>
      
    
  )
}

export default Welcome