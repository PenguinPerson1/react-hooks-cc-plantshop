import React, {useState} from "react";

function PlantCard({plant}) {
  const [toggleStock, setToggleStock] = useState(true)
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {toggleStock ? (
        <button className="primary" onClick={()=>setToggleStock(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setToggleStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
