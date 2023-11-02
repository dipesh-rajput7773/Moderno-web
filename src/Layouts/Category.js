import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


function Category() {

    const [category, SetCategory] = useState([])


    const imgObj = [
        {
            url: '/cat-2.jpg'

        },
        {
            url: '/category-2106631175-600x929.jpg'
        },
        {
            url: '/cat-2.jpg'
        },
        {
            url: '/cat-2.jpg'
        }
    ]



    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((results) => {
                console.log(results.data)
                SetCategory(results.data)
            })

    }, [])


    return (
        <> <div className='category-sec'>
            <h2 className='text-center'>BIG SALES
            </h2>

            <div className='categories'>
                <div className="category-box">

                    {
                        category.map((item, index) => {
                            return <div key={index} className="category-crd"> <Link to={`/category/${item}`} >



                                <div className="" style={{ height: '400px', width: '400px', backgroundImage: `url('${imgObj[index].url}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                                    <div className="heading-category">

                                     
                                        <h2 className="catagory-heading">{item}</h2>

                                    </div>
                                </div>


                            </Link> </div>

                        })
                    }


                </div>



            </div>

        </div>
        </>
    )
}

export default Category






