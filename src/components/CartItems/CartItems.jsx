import { ShopContext } from '../../context/ShopContext.jsx'
import React, { useContext } from 'react'

const CartItems = () => {

    const {all_product, cartItem, removeFromCart} = useContext(ShopContext)

  return (
    <div id='CartItems'>
        <div id="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
            <hr />
            <div>
                <div id="cartitems-format">
                    <img src="" id='cartico-product-icon' alt="" />
                    <p></p>
                    <p></p>
                    <button id='cartitems-quantity'></button>
                    <p></p>
                    <img src="" alt="" />
                </div>
            </div>
    </div>
  )
}

export default CartItems