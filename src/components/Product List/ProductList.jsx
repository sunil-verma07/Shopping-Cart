import React from 'react'
import './productlist.css'
import _ from 'lodash';
import {toast} from 'react-toastify'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { add } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductList = ({data}) => {
  const dispatch =useDispatch()
  const handleAdd=(product)=>{
    dispatch(add(product))
    toast.success('Item added to Cart',{
      position: toast.POSITION.BOTTOM_CENTER

    })
  }
  return (
    <div>
        <table>
  <tr className="header">
    <th className="column image">Image</th>
    <th className="column name">Name</th>
    <th className="column colour">Colour</th>
    <th className="column stock">Stock</th>
    <th className="column price">Price</th>
    <th className="column buy">Buy</th>
  </tr>
    {data && data.map((item)=>(
        <tr key={item.id} className="products">
        <td><img src={item.image} alt="image" /></td>
        <td>{_.truncate(item.name)}</td>
        <td>{item.color}</td>
        <td>{item.stock > 0 ? <p style={{"color":"green"}}>In stock</p> : <p style={{"color":"red"}}>Out of stock</p>}</td>
        <td>Rs. {item.price}</td>
        <td style={{"display":"flex","justifyContent":"end","marginTop":"5rem"}}>
            <button className="buy-item" onClick={()=>handleAdd(item)} disabled={item.stock<=0}>
                <AiOutlineShoppingCart className="add-btn"/> Add to Cart
            </button>
        </td>
        </tr>
    ))}
 
  
</table>
    </div>
  )
}

export default ProductList