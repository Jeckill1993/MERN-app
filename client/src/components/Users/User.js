import React from 'react';


const User = (props) => {
    return (
        <div>
            <img src={''} alt={'user_avatar'} />
            <p>First Name, Last Name</p>
            <p>City</p>
            <button>Open chat</button>
            <button>Add to own team</button>
        </div>
    )
}

export default User;