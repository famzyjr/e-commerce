import React from 'react'
import './newsletter.css';
function NewsLetter() {
  return (
    <div className='newsletter'>
     <h1>GET Exclusive Offers on Your Email</h1>
     <p>Subscribe to our Newsletter and stay updated</p>
      <div>
      <input type="email" placeholder='Your Email id' />
      <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter