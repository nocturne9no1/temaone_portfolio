import React from "react";

import ItemCard from "../components/ItemCard";

const Home = () => {
  const itemList = [
    'googleMail', 'mobile_withdraw', 'samsung'
  ]
  return (
    <div className="container">
      {itemList.map((el, idx) => 
        <ItemCard key={idx} name={el} />
      )}
    </div>
  )
}

export default Home;