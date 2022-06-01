import React from "react";

const ItemCard = (props) => {
  return (
    <div>
      <button onClick={() => window.open(`/html/${props.name}/index.html`)}>
        {props.name}
      </button>
    </div>
  )
}

export default ItemCard;
