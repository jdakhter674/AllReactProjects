import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

const ProductListing = () => {

    const products=useSelector(state=>state.set_product.products)


    console.log(products)
    return (
        <div style={{marginTop:"30px"}} className="ui grid container">
           <ProductComponent />

        </div>
    )
}

export default ProductListing
