import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {set_products} from './../actions/productActions'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import './card.css'


const ProductComponent = () => {
    
    
    const products=useSelector(state=>state.set_product.products)
    const dispatch=useDispatch()
   

    const fetchData= async()=>{
        const response= await axios.get('https://fakestoreapi.com/products').catch(error=>console.log("error=>",error))
        console.log(response)
        dispatch(set_products(response.data))
        
    }


    useEffect(()=>{
       fetchData()
    },[])

    return (
        <div className="container">
            <div className="cardStyle">
          
            {
                
                products.map((v,i)=>(
                    
                    <Cards key={i}
                     image={v.image} 
                     price={v.price} 
                     title={v.title} 
                     id={v.id} 
                     category={v.category} 
                     description={v.description}
                     rating={v.rating} 
                     />
                     // console.log(v)
                     // console.log(v.image,v.price,v.rating,v.title,v.id,v.category)
                     
                     ))
                     
                     
                     
                    }
                    </div>
        </div>
    )
}

export default ProductComponent
