import React from 'react'
import { products } from '../Pages/product';

import ProductCart from "../Component/productCart"


function home() {
  return (
    <div>
      <h1 className='text-3xl my-5 '>List Product</h1>
      <div className='grid lg: grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {
          products.map((product,key)=>
          <ProductCart key={key} data={product}/>
          )
        }
      </div>

    </div>
  )
}

export default home