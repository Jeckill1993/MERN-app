import React from 'react';
import {useDispatch} from "react-redux";
import {signInTC} from "../../redux/auth-reducer";
import {Field, reduxForm} from "redux-form";


const SignInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'email'} placeholder={'email'} />
            <Field component={'input'} name={'password'} placeholder={'password'} />
            <button>Sign In</button>
        </form>
        )
}
const SignInFormRedux = reduxForm({form: 'signIn'})(SignInForm);

const Header = ({isAuth}) => {
    const dispatch = useDispatch();
    const signIn = (data) => {
        dispatch(signInTC(data));
    }

    const signInSubmit = (formData) => {
        console.log(formData);
        signIn(formData);
    }

    return (
        <div>
            <img src={'#'} alt={'logo'}/>
            {isAuth
                ? <div>
                    <button>
                        Sign Out
                    </button>
                </div>
                : <SignInFormRedux onSubmit={signInSubmit} />}
        </div>
    )
}

export default Header;
