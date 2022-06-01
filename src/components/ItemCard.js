import React from "react";

const ItemCard = (props) => {
  return (
    <div>
      <button onClick={() => window.open(`/html/${props.name}/index.html`)}>
        테스트
      </button>
    </div>
  )
}

export default ItemCard;
