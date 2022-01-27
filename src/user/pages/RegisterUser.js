import React, { useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_PASSWORD, VALIDATOR_PHONE, VALIDATOR_REQUIRE, VALIDATOR_XSS } from "../../shared/util/validators";
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

const RegisterUser = () => {
    const auth = useContext(AuthContext);
    const [formState, inputHandler] = useForm(
        {
            username: {
                value: '',
                isValid: false
            },

            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            },
            phone: {
                value: '',
                isValid: false
            }
        },
        false
    );
    const RegisterUserHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    return (
        <form className="place-form" onSubmit={RegisterUserHandler}>
            <Input
                id="username"
                element="input"
                type="text"
                label="UserName"
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_XSS()]}
                errorText="Please enter a valid Name."
                onInput={inputHandler}
            />
            <Input
                id="email"
                element="input"
                type="email"
                label="Email"
                validators={[VALIDATOR_EMAIL(),VALIDATOR_XSS()]}
                errorText="Please enter a valid email."
                onInput={inputHandler}

            />
            <Input
                id="password"
                element="input"
                type="password"
                label="Password"
                validators={[VALIDATOR_PASSWORD(),VALIDATOR_XSS()]}
                errorText="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                onInput={inputHandler}

            />
             <Input
                id="address"
                element="textarea"
                label="Address"
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_XSS()]}
                errorText="Please enter a valid Address."
                onInput={inputHandler}
            />
             <Input
                id="phone"
                element="input"
                type="tel"
                label="Phone No"
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_XSS(),VALIDATOR_PHONE()]}
                errorText="Please enter a valid PhoneNo."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Register
            </Button>

        </form>
    );
}

export default RegisterUser;