import React from 'react';
import User from "./User";
import Pagination from "../tools/Pagination/Pagination";


const Users = (props) => {
    return (
        <div>
            <Pagination />
            <div>
                <User />
            </div>
            <Pagination />
        </div>
    )
}

export default Users;