import React,{useEffect} from 'react'
import './Productlist.css'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import { setSearchedProducts } from '../apislice';

const Productlist = () => {
     const products = useSelector((state)=>state.api);
     const currentPage = useSelector((state)=>state.api.currentPage)
     const productsPerPage = useSelector((state)=>state.api.productsPerPage)
     const SearchQuery = useSelector((state)=>state.api.searchQuery)
     const navigate = useNavigate();
     const startIndex = (currentPage - 1)*productsPerPage;
     const endIndex = startIndex + productsPerPage;
     const currentProducts = products.productDetails.slice(startIndex,endIndex)
    const dispatch = useDispatch();

    // console.log(products,"iuy")

    const filteredProducts = products.productDetails.filter((product) =>
    product.title.toLowerCase().includes(SearchQuery.toLowerCase()));
    

    const newproducts = filteredProducts.slice(startIndex,endIndex)

    useEffect(() => {
        dispatch(setSearchedProducts(filteredProducts));
      }, [filteredProducts]);

    console.log(filteredProducts,"searchedproduct")
    
    const displayedProducts = filteredProducts.length > 0 ? newproducts : currentProducts;
    
    const handleClick=(productId)=>{
        navigate(`/detailpage/${productId}`)
    }

  return (
    <>
    <div className='outer-container'>
        {displayedProducts.map((product,index)=>(
            <div onClick={()=>handleClick(product.id)} className='product-container' key={product.id}>
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
    <div>
    <Pagination />
    </div>
    </>
  )
}

export default Productlist