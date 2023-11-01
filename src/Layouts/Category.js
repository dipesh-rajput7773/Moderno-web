import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


function Category() {

    const [category, SetCategory] = useState([])






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
                <ul>
                    {
                        category.map((item, index) => {
                            return <li key={index} > <Link to={`/category/${item}`} > {item}</Link> </li>

                        })
                    }

    

                </ul>


                
            </div>

        </div>
        </>
    )
}

export default Category