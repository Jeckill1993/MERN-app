import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './NavBar.module.css';


const Navbar = () => {
    return (
        <div className={classes.container}>
            <nav>
                <NavLink to={'/profile'}>
                    <div>Profile</div>
                </NavLink>
                <NavLink to={'/messages'}>
                    <div>Messages</div>
                </NavLink>
                <NavLink to={'/my-team'}>
                    <div>My team</div>
                </NavLink>
                <NavLink to={'/choose-football-field'}>
                    <div>Choose football field</div>
                </NavLink>
                <NavLink to={'/football-players'}>
                    <div>Football players</div>
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar;