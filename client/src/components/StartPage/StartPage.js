import React from 'react';
import {useDispatch} from 'react-redux';


const StartPage = () => {
    const dispatch = useDispatch();
    console.log(dispatch);
    return (
        <div>
            AuthPage
        </div>
    )
}

export default StartPage;
