import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import'./Pagination.css'
import { setCurrentPage } from '../apislice'

const Pagination = () => {

    const dispatch = useDispatch();
    const currentPage =  useSelector((state)=>state.api.currentPage);
    const productsPerPage = useSelector((state)=>state.api.productsPerPage);
    const totalProducts = useSelector((state)=> state.api.productDetails.length)
    const searchedTotalproducts = useSelector((state)=>state.api.searchedProducts)

    console.log(searchedTotalproducts,"new total search")

    const totalPages = searchedTotalproducts>0? Math.ceil(searchedTotalproducts/productsPerPage): Math.ceil(totalProducts/productsPerPage);

    const handlePage=(page)=>{
        dispatch(setCurrentPage(page))
    }

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++){
        pageButtons.push(i)
    }
  return (
    <div className='outer-buttonclass'>{pageButtons.map((page,index)=>{
        return <button onClick={()=>handlePage(page)} className='pagination-button' key={index}>{page}</button>
    })}</div>
  )
}

export default Pagination