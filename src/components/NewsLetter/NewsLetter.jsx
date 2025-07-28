import React from 'react'

const NewsLetter = () => {
  return (
    <div id='newsletter' className=' w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto mb-[150px] pt-0 pb-[140px] bg-gradient-to-b from-[#fde1ff] from-0% to-[#e1ffea22] to-60% gap-8 '>
        <h1 className=' text-[#454545] text-[55px] font-semibold '>Get Exclusive Offers On Your Email</h1>
        <p className=' text-[#454545] text-[20px] '>Subscribe to our newsletter and stay updated</p>
        <div className=' flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3] border-solid '>
            <input className=' w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px ] ' type="email" placeholder='Your Email Id' />
            <button className=' w-[210px] h-[70px] rounded-[80px] text-[16px] text-white cursor-pointer '>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter