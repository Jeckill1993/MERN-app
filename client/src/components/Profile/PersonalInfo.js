import React, {useState} from 'react';


const PersonalInfo = (props) => {
    let [isEdit, setEdit] = useState(false);

    return (
        <div>
                <img src={''} alt={'avatar'}/>
                {isEdit
                    ? <div>
                        <input type={'text'} placeholder={'first name'} />
                        <input type={'text'} placeholder={'last name'} />
                        <input type={'text'} placeholder={'city'} />
                        <input type={'text'} placeholder={'contact phone'} />
                        <button onClick={() => {setEdit(false)}}>Save</button>
                    </div>
                    : <div>
                        <h2><span>First Name</span><span>Last Name</span></h2>
                        <p>City</p>
                        <p>Contact Phone</p>
                        <button onClick={() => {setEdit(true)}}>Edit</button>
                    </div>
                }
        </div>
    )
}

export default PersonalInfo;