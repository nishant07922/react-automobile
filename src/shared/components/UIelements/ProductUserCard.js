import React,{useRef} from "react";
//import Input from "../../../shared/components/FormElements/Input";
import { useForm } from "../../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../util/validators";

import Inputnocss from "../../../shared/components/FormElements/Inputnocss";

const ProductUserCard = (props) => {
    
    const [formState, inputHandler] = useForm(
        {
            
            quantity: {
                value: '',
                isValid: false
            }

        },
        false
    );
    // const inputHandler = e =>{
    //     console.log(e.target.value);
    // }
    const addToCart = event => {
        event.preventDefault();
        console.log(formState.inputs.quantity.value);
        console.log(props.P_id);

    };

    return (

        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img src={props.filename} className="card-img-top" ></img>
                <div className="card-body">
                    <form onSubmit={addToCart}>
                       
                        <p className="card-text">{props.name}</p>
                        <p className="card-text">${props.price}</p>
                        <p className="card-text">{props.desc}</p>
                        
                        <Inputnocss
                            id="quantity"
                            element="input"
                            type="number"
                            label="UserName"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid quant."
                            onInput={inputHandler}
                            min='1' 
                            max={props.quant} 
                           
                            />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-sm btn-outline-secondary">Add To Cart</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
}

export default ProductUserCard;