import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { items } from './Data';
import { useState } from 'react';
import Product from './Products';



function SearchItem({cart,setCart}) {
  const { term } = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    const handleFilter = () => {
      const element = items.filter((e) => e.title.toLowerCase().includes(term.toLowerCase()))
      setData(element)
    }
    handleFilter()
  }, [term])

  return (
    <div>
      <Product items={data} cart={cart} setCart={setCart}  />
    </div>
  )
}

export default SearchItem
