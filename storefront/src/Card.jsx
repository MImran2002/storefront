import React from "react";

const Card = (props) => {
    const storeName = props.storeName;
    const foodType = props.type;
    const link = props.link;
    const img = props.img

    return(
        <div>
            <img src={img}></img>
            <h2>{storeName}</h2>
            <h3>{foodType}</h3>
            <button href={link}></button>
        </div>
    )
}

export default Card