// **Display Price**: Show the price with a discount if the user is logged in,
//  otherwise show the full price.
import React from 'react'

const PriceDisplay = () => {
const product = {
  name:"mobile",
  price:60000,
  discount:12,

}
const isLoggedIn = true;

const dPrice = isLoggedIn ? product.price - (product.discount/100) * product.price :product.price;


  
  return (
    <div className='text-center'>
      <h2>{product.name}</h2>
          <h1>price: {product.price}</h1>    
          <h1>discount: {product.discount}% {`(-${product.price * (product.discount/100)})`}</h1>    
          <h1>total :{dPrice.toFixed(2)}</h1>    
    </div>
  )
}

export default PriceDisplay