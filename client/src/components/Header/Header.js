import React from 'react';


const Header = (props) => {
    return (
        <div>
            <img src={'#'} alt={'logo'}/>
            {props.auth
                ? <div>
                    <button>
                        Sign Out
                    </button>
                </div>
                : <div>
                    <input type={'text'} placeholder={'email'}/>
                    <input type={'password'} placeholder={'password'}/>
                    <button>Sign In</button>
                </div>}
        </div>
    )
}

export default Header;
