import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../components/redux/cartSlice.js';
import _ from 'lodash';
import {AiFillCloseCircle} from 'react-icons/ai'
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
     const dispatch = useDispatch()
  const increaseQuantity =(product)=>{
     const newQuantity = quantity +1;
     dispatch(add(product, newQuantity))
  }
  const decreaseQuantity =(product)=>{
      const newQuantity = quantity - 1;
      if(quantity > 1){
        dispatch(add(product, newQuantity))
      }
  }
  const removeItem = (product)=>{
    dispatch(remove(product.id))
  }



  const [quantity,setQuantity] = useState(1)
    const cart = useSelector(state=>state.cart)

    const totalPrice = cart.reduce((acc, item)=>acc + item.quantity*item.price,0);

    return (
        <div className="cart">
            <div className="cart-list">
              <table>
                <tr>
                  <th className="columns product">Product</th>
                  <th className="columns price">Price</th>
                  <th className="columns quan">Quantity</th>
                  <th className="columns subtotal">SubTotal</th>
                </tr>
                {cart && cart.map((item)=>(
                  <tr className="data-row" key={item.id}>
                  <td className="data-name-row"><AiFillCloseCircle className="remove-item" onClick={()=>removeItem(item)}/><img src={item.image} alt="image" /> {_.truncate(item.name)}</td>
                  <td>{item.price}</td>
                  <td><div className="quantity">
                    <button onClick={()=>increaseQuantity(item)}>+</button><input type="number" value ={item.quantity} readOnly /><button onClick={()=>decreaseQuantity(item)}>-</button> </div></td>
                  <td>Rs. {item.price*item.quantity}</td>
                </tr>
                ))}
              </table>
            </div>
            <div className="checkout-box">
              <h5>Cart Totals</h5>
              <div className="subtotal">
                <p>Subtotal</p>
                <p className="amount">{totalPrice}Rs</p>
              </div>
              <div className="subtotal">
              <p>Shipping Charges</p>
                <p className="amount">{parseFloat((totalPrice/100)*5).toFixed(2)}</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p className="amount">Rs {parseFloat(totalPrice + (totalPrice/100)*5).toFixed(2)}</p>
              </div>
              <button>
                <Link to="/thanks">Proceed To Checkout</Link>
              </button>
            </div>
           
        </div>
    );
};

export default Cart;