import React from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../api/getAllProducts';
import { useState } from 'react';
import ProductCard from '../Components/ProductCard';

export default function Home() {

  const [products,setProducts]=useState([])

  const fetchData = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(()=>{  
    fetchData();
  },[]);

  return (
    <main className='flex flex-wrap gap-7 justify-center pt-5'>
      {
        products.length>0 && products.map(
          product=><ProductCard product={product}/>
        )
      }
    </main>
    

      
    
  )
}
