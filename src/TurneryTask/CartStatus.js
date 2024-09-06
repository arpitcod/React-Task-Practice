import React, { useState } from 'react'

const CartStatus = () => {
    const [cartItems ,setCartItems] = useState(0);
  return (
    <div className='text-center'>
       {
        cartItems === 0 ? (<h1>Cart is empty</h1>) : (<h1>{cartItems}</h1>)
       }
    </div>
  )
}

export default CartStatus