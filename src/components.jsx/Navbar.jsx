import React from 'react'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { setSearchQuery,setcategoryFilter } from '../apislice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate = useNavigate();
    const products = useSelector((state)=>state.api.productDetails)

    const uniqueCategories = [...new Set(products.map((product) => product.category))];



    console.log(products,"newlist")

    const dispatch = useDispatch();

    const handleInput=(e)=>{
        let val = e.target.value;
        dispatch(setSearchQuery(val))
        navigate('/')
    }

    const handleCategory=(e)=>{
        const categoryvalue = e.target.value;
        dispatch(setcategoryFilter(categoryvalue));
        navigate(`/category`)
    }
    
  return (
    <div className='navbar-outercontainer'>
        <div>
        
        <select onChange={handleCategory} >
        <option value="">Select Category...</option>
            {uniqueCategories.map((item,index)=>(
                <option key={index} value={item}> {item} </option>
            ))}
      </select>
      
      </div>
      <div style={{padding:'0px 40px'}}>
        <input onChange={handleInput}  type="search" name="" id="" /><span> <FaSearch /></span>
      </div>
    </div>
  )
}

export default Navbar