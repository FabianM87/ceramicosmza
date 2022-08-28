import React,{useState, useEffect} from 'react';
import Title from '../Title/Title';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';

const tienda =[
{id: 1, image: "https://scontent.fmdz9-1.fna.fbcdn.net/v/t39.30808-6/298118763_5463234567100359_6446403707434413538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=rlnJrskeTOcAX8o2wrL&_nc_ht=scontent.fmdz9-1.fna&oh=00_AT_XZnhjCnTK0wENZ_2P4JQ9ukfALT2LrmvorzK_kXeHWg&oe=63105BF1", title: "Simil madera"},
{id: 2, image: "https://scontent.fmdz9-1.fna.fbcdn.net/v/t39.30808-6/299593139_5477310202359462_701931133189047856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ypnfyEhH0I8AX_Wyno_&_nc_ht=scontent.fmdz9-1.fna&oh=00_AT9Znp-iyfA4K5yH0Nnud0ckS2fOLlTzgXWtHK4JZG0iYQ&oe=63102126", title: "Calcario"},
{id: 3, image: "https://scontent.fmdz9-1.fna.fbcdn.net/v/t39.30808-6/291149493_5355924417831375_7900999237503446816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ilboiJyUTL4AX_xuXOI&_nc_ht=scontent.fmdz9-1.fna&oh=00_AT-Gwav-wsuh5hEYfA2YorCYHog78XXwewfh-Nux5X325g&oe=6310C24D", title: "Beige"}

];
export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect (()=> {
        const getData = new Promise (resolve => {
            setTimeout(()=>{
                resolve (tienda);
            },2000);
        });
getData.then(res => setData(res));

    }, [])
    
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} productos`)
    }
    return ( 
        <Title greeting='Ceramicos y Sanitarios Mendoza'/>,
        <ItemCount initial ={1} stock={4} onAdd={onAdd}/>,
        <ItemList data = {data} />
     );
}
  
export default ItemListContainer;
