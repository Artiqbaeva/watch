import React from 'react'
import {WATCHES} from "../../static"

const Products = () => {
    console.log(WATCHES);
  return (
   <div className='watches container grid grid-cols-3 gap-3 '>
     {
        WATCHES?.map((watches) =>(
            <div key={watches.id}   className=' watches-item'>
                <div key={watches.id} className='flex gap-4'>
                <img src={watches.image} alt={watches.about} />
               <div>
               <h3>{watches.name}</h3>
               <p>{watches.about}</p>
               </div>
                </div>
            </div>
        ))
     }
   </div>
  )
}

export default Products