import "./item.css";
import React from 'react'

const item = ({info}) => {
  return (
<a href="" className="ceramico">
    <img src={info.image} alt="ceramico pared"/>
    <p>{info.title}</p>
</a>
  )
}

export default item;