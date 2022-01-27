import React from "react";

import './ProductUserCard.css';

const ProductAdminCard = (props) => {
    return (

        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img src={props.filename} class="card-img-top" ></img>

            <div class="card-body">
                <form method="post" action="edit.php">
                    <input type="hidden" name="pid" value={props.P_id} />
                    <p class="card-text">{props.name}</p>
                    <p class="card-text">${props.price}</p>
                    <p class="card-text">Quantity: {props.quant}</p>
                    <p class="card-text">Description: {props.desc}</p>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <input type="submit" value="Edit" class="btn btn-sm btn-outline-secondary" name="edit" />
                            <input type="submit" value="Delete" class="btn btn-sm btn-outline-secondary" name="delete" />

                        </div>

                    </div>
                </form>
            </div>
        </div>
      </div >
        

        
       
    );
}

export default ProductAdminCard;