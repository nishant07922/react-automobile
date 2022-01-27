import React, { useEffect ,useState} from "react";
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIelements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_XSS,
    VALIDATOR_EMAIL,
    VALIDATOR_PASSWORD,
    VALIDATOR_PHONE
} from '../../shared/util/validators';

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

const UpdateUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const userId = useParams().userId;
    const identifiedUser = DUMMY_USER.find(u => u.U_id === userId);
    
    const [formState, inputHandler, setFormData] = useForm(
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

    useEffect(() => {
        if (identifiedUser !== undefined) {
            setFormData(
                {
                    // value ahiya aavti nathi
                    //uparthi aave che
                    username: {
                        value: identifiedUser.username,
                        isValid: true
                    },
                    email: {
                        value: identifiedUser.email,
                        isValid: true
                    },
                    password: {
                        value: identifiedUser.password,
                        isValid: true
                    },
                    address: {
                        value: identifiedUser.address,
                        isValid: true
                    },
                    phone: {
                        value: identifiedUser.phone,
                        isValid: true
                    }
                    
                },
                true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedUser]);

    const userUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedUser) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find User!</h2>
                </Card>
            </div>
        );
    };
    if (isLoading) {
        return (
          <div className="center">
            <h2>Loading...</h2>
          </div>
          
        );
      }
    return (
        <form className="place-form" onSubmit={userUpdateSubmitHandler}>
            <Input
                id="username"
                element="input"
                type="text"
                label="Username"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_XSS()]}
                errorText="Please enter a valid Name."
                onInput={inputHandler}
                initialValue={formState.inputs.username.value}
                initialValid={formState.inputs.username.isValid}
            />
            <Input
                id="email"
                element="input"
                type="email"
                label="Email"
                validators={[VALIDATOR_EMAIL(), VALIDATOR_XSS()]}
                errorText="Please enter a valid Email."
                onInput={inputHandler}
                initialValue={formState.inputs.email.value}
                initialValid={formState.inputs.email.isValid}
            />
            <Input
                id="password"
                element="input"
                type="password"
                label="Password"
                validators={[VALIDATOR_PASSWORD(), VALIDATOR_XSS()]}
                errorText="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                onInput={inputHandler}
                initialValue={formState.inputs.password.value}
                initialValid={formState.inputs.password.isValid}
            />
            <Input
                id="address"
                element="textarea"
                label="Address"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_XSS()]}
                errorText="Please enter a valid Address."
                onInput={inputHandler}
                initialValue={formState.inputs.address.value}
                initialValid={formState.inputs.address.isValid}
            />
            <Input
                id="phone"
                element="input"
                type="tel"
                label="Phone No"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_XSS(), VALIDATOR_PHONE()]}
                errorText="Please enter a valid PhoneNo."
                onInput={inputHandler}
                initialValue={formState.inputs.phone.value}
                initialValid={formState.inputs.phone.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE
            </Button>
        </form>
    );

};
export default UpdateUser;