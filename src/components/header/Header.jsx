import React from 'react'
import logoNav from "../../assets/Logo.svg"
import search from "../../assets/Search.svg"
import person from "../../assets/Person.svg"
import cart from "../../assets/Shopping Cart.svg"
import {LINK} from "../../static/index"

const Header = () => {
  return (
    <header className=' bg-[#0B0B0B] relative header h-screen'>
    <nav className='container mx-auto navbar flex  min-h-[600px] items-start justify-between my-4 ' >
      <div >
      <img src={logoNav} alt='' />
      </div>
     
    <ul className='flex gap-[27px] text-nowrap text-[#8B8E99]'>
      {
        LINK?.map((link, index)=>{
          return <li key={index}>{link}</li>
        })
        }
    </ul>
        <div className='flex gap-[16px] '>
            <img src={search} alt="" />
            <img src={person} alt="" />
            <img src={cart} alt="" />
        </div>
    </nav>
   </header>
  )
}

export default Header