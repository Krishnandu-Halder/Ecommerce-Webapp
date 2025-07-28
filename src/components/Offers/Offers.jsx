import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div id='offers' className='w-[85%] h-[60vh] flex m-auto pt-0 pb-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] from-0% to-[#e1ffea22] to-60%'>
        <div id="offers-left" className='flex-1 ml-40 flex flex-col justify-center'>
            <h1 className="text-[#171717] text-[80px] font-semibold ">Exclusive</h1>
            <h1 className="text-[#171717] text-[80px] font-semibold ">Offers For You</h1>
            <p className='text-[#171717] text-[22px] font-semibold' >ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] bg-[#ff4141] rounded-[35px] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer  '>Check Now</button>
        </div>
        <div id="offers-right" className='items-center justify-end pt-[50px] flex-1 flex'>
            <img src={exclusive_image } alt="" />
        </div>
    </div>
  )
}

export default Offers