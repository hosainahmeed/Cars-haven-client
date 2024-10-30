import React from 'react'
import Cart from './Cart'
import data from "./data.json"


function Bloge({readTimeCollect}) {
  return (
    <div className='w-1/2 rounded-2xl border overflow-hidden'>
      {
        data.map((data)=> <Cart readTimeCollect={readTimeCollect} key={data.id} data={data}></Cart>)
      }
    </div>
  )
}

export default Bloge