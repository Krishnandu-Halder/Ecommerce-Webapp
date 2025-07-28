import React from 'react'

const DescriptionBox = () => {
  return (
    <div id='DescriptionBox' className='my-[120px] mx-[170px]  '>
        <div id="description-navigator" className='flex'>
            <div id="descriptionbox-nav-box" className='flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0] '>Description</div>
            <div id="descriptionbox-nav-box fade" className='flex items-center bg-[#fbfbfb] text-[#555] justify-center text-base font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0]'>Reviews (122)</div>
        </div>
        <div id="descriptionbox-description" className='flex flex-col gap-[25px] border-[1px] border-solid border-[#d0d0d0] p-[48px] pb-[70px] '>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet, it severs as a virtual marketplace where business and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (e.g, sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox