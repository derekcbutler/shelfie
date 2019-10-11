import React from 'react';
import Product from '../Product/Product';
// import { url } from 'inspector';

function Dashboard(props) {
    return(
        <div>
            {props.inventory.map(e => {
                return(
                    <Product />
                )
            })}
        </div>
    )
}

export default Dashboard;