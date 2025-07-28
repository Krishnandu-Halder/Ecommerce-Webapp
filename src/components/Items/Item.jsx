import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <>
    <div id='item' className='w-[350px] hover:scale-105 transition-transform duration-600 '>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='mt-[6px] mb-[6px] mx-0'>{props.name}</p>
        <div id="item-prices" className='flex gap-[20px] '>
            <div id="item-price-new" className=' text-[#374151] text-[18px] font-semibold '>
               $ {props.new_price}
            </div>
            <div id="item-price-old" className=' text-[#8c8c8c] text-[18px] font-medium line-through '>
                ${props.old_price}
            </div>
        </div>
    </div>
    </>
  )
}

export default Item