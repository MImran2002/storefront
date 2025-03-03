import React from "react";
import './Card.css'
const Card = (props) => {
    const storeName = props.storeName;
    const foodType = props.type;
    const link = props.link;
    const img = props.img

    return(
        <div className="card">
            <img className="img"src={img}></img>
            <h2 className="name">{storeName}</h2>
            <h3 className="type">{foodType}</h3>
            <button ><a href={link}>View info</a></button>
        </div>
    )
}

export default Card