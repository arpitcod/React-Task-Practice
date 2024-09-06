// **Product Stock**: Show "Out of Stock" if the product quantity 
// is 0, otherwise show the quantity available.

import React from 'react'

const ProductStock = ({quantity}) => {
  return (
    <div className='text-center'>
        {
            quantity === 0 ? (
                <h1>This product out of stock</h1>
            ) : (
                <h1>{quantity}</h1>
            )
        }
    </div>
  )
}

export default ProductStock