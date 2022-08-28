import Item from '../item/item'
import React from 'react'


const itemList = ({data=[]}) => {
  return (
    data.map(tienda=> <Item key={tienda.id} info={tienda} />)
 
    )
}

export default itemList