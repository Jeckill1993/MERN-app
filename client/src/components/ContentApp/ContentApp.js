import React from 'react';
import Navbar from "../NavBar/NavBar";
import MainContainer from "../MainContainer/MainContainer";
import classes from './ContentApp.module.css';


const ContentApp = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <MainContainer />
        </div>
    )
}

export default ContentApp;