import React from 'react'
import heroImg from '../../assets/watch hero.svg'
import searchHero from "../../assets/searchbtn.svg"
const Hero = () => {
  return (
   <div className='container mx-auto absolute right-42 top-10 items-center  flex gap-2.5'>
    <div className='text-[#fff] container hero'>
      <h1 className='text-[64px] leading-15.5 font-[Poppins] font-bold'>Discover <br /> Most Suitable <br /> Watches</h1>
      <p>Find the best, reliable, and cheap smart watches here. <br /> We focus on product quality. Here you can find smart <br /> watches of almost all brands. So why you are waiting? <br /> Just order now!</p>
      <div className='input-btn'>
        <img src={searchHero} alt="" />
        <input type="text" placeholder='Find the best brands' className='text-[#8B8E99B2]' />
        <button>Search</button>  
      </div>
    </div>
    <div className='w-full'>
    <img className='' src={heroImg} alt="" />
    </div>
   </div>
  )
}

export default Hero