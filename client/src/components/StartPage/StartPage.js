import React from 'react';
import {useDispatch} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import {setAuthInfoTC} from "../../redux/auth-reducer";


const RegistrationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" name={'fullName'}/>
            <Field component="input" name={'email'}/>
            <Field component="input" name={'password'}/>
            <button>Registration</button>
        </form>
    )
}
const RegistrationFormRedux = reduxForm({form: 'registration'})(RegistrationForm);

const StartPage = () => {
    const dispatch = useDispatch();
    const setAuth = (data) => {
        dispatch(setAuthInfoTC(data))
    }

    const registration = (formData) => {
        setAuth(formData);
    }
    return (
        <div>
            <RegistrationFormRedux onSubmit={registration}/>
        </div>
    )
}

export default StartPage;
