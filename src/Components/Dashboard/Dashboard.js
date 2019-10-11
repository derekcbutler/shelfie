import React from "react";
import Product from "../Product/Product";
// import { url } from 'inspector';

function Dashboard(props) {
    console.log(props.inventory)
  return (
    <div>
      {props.inventory.map(e => {
        return (
          <Product
            inventory={props.inventory}
            getClothes={props.getClothes}
            addClothes={props.addClothes}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
