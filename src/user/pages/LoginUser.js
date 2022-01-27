import React,{useContext} from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_PASSWORD } from "../../shared/util/validators";
import { AuthContext } from '../../shared/context/auth-context';


const DUMMY_USER = [
    {
        U_id: '1',
        username: 'Admin',
        email: 'admin@admin.com',
        password: 'Admin@1234',
        address: '20 W 34th St, New York, NY 10001',
        phone: '7878787878'
    },
    {
        U_id: '2',
        username: 'User',
        email: 'user@user.com',
        password: 'User@1234',
        address: '20 W 34th St, New York, NY 10001',
        phone: '7878787878'
    }
];

const LoginUser = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );
    const loginUserHandler = event => {
        event.preventDefault();
        if(formState.inputs.email.value && formState.inputs.password.value){
        
            const email = formState.inputs.email.value;
            if (email == "admin@gmail.com"){
                auth.adminLogin();
                console.log(auth.isLoggedInAsAdmin);
            }
            else{
            //backend mathi aavse ke login thase ke nai
            auth.login();
            console.log(auth.isLoggedIn);
        }
    }
    };

    return (
        <form className="place-form" onSubmit={loginUserHandler}>
            <Input
                id="email"
                element="input"
                type="text"
                label="Email"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email."
                onInput={inputHandler}

            />
            <Input
                id="password"
                element="input"
                type="password"
                label="Password"
                validators={[VALIDATOR_PASSWORD()]}
                errorText="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                onInput={inputHandler}

            />
            <Button type="submit" disabled={!formState.isValid}>
                Login
            </Button>
            <Button to = "/register">
                Register
            </Button>
        </form>
    );
}

export default LoginUser;