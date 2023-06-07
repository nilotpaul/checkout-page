import { useState } from 'react'
import './App.css'

function App() {


  const images = [
    {
      brand: "MAR",
      type: "Classic Men's Watch",
      img: "one.jpg"
    },
    {
      brand: "MEGIR",
      type: "Designed Women's Watch",
      img: "two.jpg"
    },
    {
      brand: "TITAN RAGA",
      type: "Stylish Women's Watch",
      img: "three.jpg"
    }
  ]

  const [currimg, setCurrImg] = useState(0)
  

  return (
     <div>
      <div className="container">
        <div className="img-container">
            <div className="left" onClick={()=> {
            currimg > 0 && setCurrImg(currimg - 1);
           }}><i className='btn-left' onClick={()=> {
            currimg > 0 && setCurrImg(currimg - 1);
           }} /></div>
           <div className="center">
           <h3>{images[currimg].brand}</h3>
           <h2>{images[currimg].type}</h2>
            <img src={images[currimg].img} height="65%" alt="product-img" />
           </div>
           <div className="right" onClick={()=> {
            currimg < images.length - 1 && setCurrImg(currimg + 1);
           }}><i className='btn-right' onClick={()=> {
            currimg < images.length - 1 && setCurrImg(currimg + 1);
           }} /></div>

        </div>
        <div className="form">
          <div className="upper">
          <h2>CHECKOUT</h2>
          <input type="text" placeholder='Full Name'/>
          <input type="text" placeholder='Card Name'/>
          <input type="text" placeholder='Card Number'/>
          <input type="text" placeholder='Cardholder Name'/>
          </div>
          <div className="lower">
          <input type="text" placeholder='Expiry Date'/>
          <input type="password" placeholder='CVV'/></div>
          <a href="/"><button>ORDER</button></a>
           
        </div>
      </div>
     </div>
  )
}

export default App
