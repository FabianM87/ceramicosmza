import React from 'react';
import Title from '../Title/Title';
import ItemCount from '../itemCount/ItemCount';


export const ItemListContainer = () => {
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} productos`)
    }
    return ( 
        <Title greeting='Ceramicos y Sanitarios Mendoza'/>,
        <ItemCount initial ={1} stock={4} onAdd={onAdd}/>
     );
}
  
export default ItemListContainer;
