import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react'

const tienda = {id: 1, image: "https://scontent.fmdz9-1.fna.fbcdn.net/v/t39.30808-6/298118763_5463234567100359_6446403707434413538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=rlnJrskeTOcAX8o2wrL&_nc_ht=scontent.fmdz9-1.fna&oh=00_AT_XZnhjCnTK0wENZ_2P4JQ9ukfALT2LrmvorzK_kXeHWg&oe=63105BF1", title: "Simil madera"};

export const ItemDetailContainer = () => {
  const [data, setData] = useState ({});
  useEffect(()=>{
      const getData = new Promise(resolve =>{
          setTimeout(()=>{
              resolve(tienda);
          },2000);
      });
      getData.then(res => setData(res));
  },[])


  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer;