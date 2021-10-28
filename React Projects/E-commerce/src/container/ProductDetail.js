import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { remove_product, select_products } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import './container.css'
import { Button } from '@material-ui/core';

const ProductDetail = () => {

    const productDetail = useSelector(state => state.select_product)

    const { productId } = useParams()
    const dispatch = useDispatch()

    console.log(productDetail)

    const fetchProductDetailById = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(error => console.log(error))
        console.log(response.data)
        dispatch(select_products(response.data))
    }

    useEffect(() => {
        fetchProductDetailById()
        return ()=>{
            dispatch(remove_product())
        }
    }, [productId])


    return (
        <div className="container">
            {
                Object.keys(productDetail).length === 0 ?
                (<div>...Loading</div>):(

                
            <div className="cardContainer">

                <div className="left">

                    <img src={productDetail.image} />

                </div>
                <div className="right">
                    <h1>{productDetail.title}</h1>
                    <div className="price">
                        <h2>{productDetail.price} <span>pkr</span></h2>


                    </div>
                    <p>{productDetail.description.substring(0,150)}...</p>

                    <Button variant="contained" color="primary">
                       ADD TO CART
                    </Button>

                </div>

            </div>
            )
        }
        </div>

        )


            
} 
        
export default ProductDetail;
