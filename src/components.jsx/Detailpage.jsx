import React from 'react'
import'./Detailpage.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Detailpage = () => {

    const {id} = useParams();
    const products = useSelector((state)=>(state.api.productDetails))
    console.log(products)
    const product = products.find((product) => product.id === parseInt(id));

    return (
        <>
        <div className='detailpage-outerclass'>
            {product ? (
                <>
                <div className='detail-image'>
                    <img src={product.image} alt="" srcset="" />
                </div>
                <div className='product-details'>
                    <div style={{fontSize:'25px',fontWeight:'400',padding:'20px 0px'}}>{product.title}</div>
                    <div style={{fontSize:'20px',fontWeight:'bolder',padding:'20px 0px'}}>Price :${product.price}</div>
                    <div>{product.description}</div>
                    <button className='addtocart'>ADD TO CART</button>
                </div>
                </>
            ) : (
            <div>Loading...</div>
            )}
        </div>
      </>
    );
}

export default Detailpage