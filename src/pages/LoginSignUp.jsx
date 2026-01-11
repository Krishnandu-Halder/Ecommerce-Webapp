import React from 'react'

const LoginSignUp = () => {
  return (
    <div id='loginsignup' className=' w-full h-[80vh] bg-[#fce3fe] pt-[10px] pb-[800px] '>
      <div id="loginsignup-container" className=' w-[580px] h-[670px] bg-white m-auto pt-[40px] pb-[500px] px-[60px]  '>
        <h1 className='my-[20px] mx-[0px] text-3xl'>Sign Up</h1>
        <div id="loginsignup-fields" className='flex flex-col gap-[29px] mt-[30px] '>
          <input className='h-[72px] w-full pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] ' type="text" placeholder='Your Name' />
          <input className='h-[72px] w-full pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] ' type="email" placeholder='Email Address' />
          <input className='h-[72px] w-full pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] ' type="password" placeholder='Password' />
        </div>
        <button className='w-[460px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer '>Continue</button>
        <p id="loginsignup-login" className='mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span></p>
        <div id="loginsignup-agree" className='flex items-center mt-[25px] gap-5 text-[#5c5c5c] pb-[40px] text-lg font-medium '>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy</p>
        </div> 
      </div>
    </div>
  )
}

export default LoginSignUp