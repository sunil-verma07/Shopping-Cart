import React, { useState } from 'react'
import './header.css'
import {GrPowerReset} from 'react-icons/gr'
import {data} from '../../data.js'
import ProductList from '../Product List/ProductList'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const [filteredData,setFilteredData] = useState(data)
    const cart = useSelector(state=>state.cart)

    const filterItems=(catItem)=>{
        
        if(catItem === 'All'){
          setFilteredData(data)
        }
        const result = data.filter((item)=>{
            return item.category === catItem
        })
        setFilteredData(result)
    }

    const searchProduct =(key)=>{
        const result = data.filter((item)=>{
            return item.name.toLowerCase().includes(key)
        })
        setFilteredData(result)
    }

  return (
    <>
    <div className="Header">
        <div className="leftbar">
            <select name="category" id="category" onChange={(e)=>filterItems(e.target.value)}>
                <option value="All" default>Category</option>
                <option value="hoodies" >Hoddies</option>
                <option value="tshirt">T-shirts</option>
                <option value="jeans" >Jeans</option>
            </select>
            <select name="size" id="size" onChange={(e)=>filterItems(e.target.value)}>
                <option value="All" default>Size</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
            </select>
            <div className="reset">
               <GrPowerReset className="reset-icon"/>Reset
            </div>
        </div>
        <div className="rightbar">
            <div className="search-bar">
            Search:
            <input type="text" onChange={(e)=>searchProduct(e.target.value)}/>
            </div>
            <Link to="/cart">
            <div className="add-to-cart">
                Cart({cart && cart.length})
            </div>
            </Link>
        </div>
    </div>
    <ProductList data={filteredData}/>
    </>
  )
}

export default Header