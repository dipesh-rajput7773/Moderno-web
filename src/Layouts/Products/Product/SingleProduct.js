import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function SingleProduct() {

    const { id } = useParams();
    console.log(id)

    const [singleProduct, SetSingleProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then((results) => {
                console.log(typeof results.data)
                console.log(results.data)
                SetSingleProduct(results.data)
            })

    }, [])

    return (
        <div className='single-product-page'>
            <div className='row'>

        <div className='col-md-6'>
            <div className='single-product-image'>

                <img src={singleProduct.image}></img>
                
            </div>
        </div>


        <div className='col-md-6'>
            <div className='single-product-details'>
             
            <div className='single-product-name'> { singleProduct.title} </div>
            <div className='single-product-desc'>
                {singleProduct.description}
            </div>
            <div className='single-product-price'>
                ${singleProduct.price}
            </div>  
            <div className='single-product-desc'>
                {singleProduct.category}
            </div>
            {/* <div className='single-product-desc'>
                {singleProduct.rating.rate}
            </div> */}
         
               
           
            </div>
        </div>

               
</div>
        </div>





    )
}

export default SingleProduct