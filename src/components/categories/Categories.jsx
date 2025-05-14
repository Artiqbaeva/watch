import React from 'react'
import { CATEGORIES } from '../../static'
const Categories = () => {
  return (
    <div className='container text-center category'>
        <p>Find your favourite smart watch.</p>
        <h2>Our Latest Products</h2>
        <div className='container mx-auto grid grid-cols-3 gap-[49px]'>
            {
                CATEGORIES?.map((category) =>(
                    <div key={category.id} className='category-item '>
                         <img src={category.view} alt={category.title} />
                         <div className='justify-center'>
                            <h3>{category.title}</h3>
                            <img className='' src={category.rank} alt="" />
                            <p>{category.price}</p>
                         </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories