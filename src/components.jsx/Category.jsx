import React from 'react'
import'./Category.css'
import { useSelector } from 'react-redux'
import'./Productlist.css'
import { useNavigate } from 'react-router-dom'

const Category = () => {

    const products = useSelector((state)=>state.api)
    const categoryResult = useSelector((state)=>state.api.categoryFilter)
    const navigate = useNavigate()
    const filteredProducts = products.productDetails.filter((product) =>
    product.category.toLowerCase().includes(categoryResult.toLowerCase()));

    console.log(filteredProducts,'nh')
    const handleClick=(productId)=>{
        navigate(`/detailpage/${productId}`)
    }

  return (
    <div className='outer-container'>
        {filteredProducts.map((product,index)=>(
            <div onClick={()=>handleClick(product.id)}  className='product-container' key={product.id}>
                 <div className='product-image'>
                    <img src={product.image} />
                 </div>
                 <div className='product-title'>
                    {product.title}
                 </div>
                 <div className='product-price'>
                    ${product.price}
                 </div>
            </div>
        ))}
        
    </div>
  )
}

export default Category