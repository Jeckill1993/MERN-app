import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Friends from "../Friends/Friends";
import Search from "../Search/Search";
import Users from "../Users/Users";


const MainContainer = () => {
    return (
        <div>
            <Route path={'/profile'} render={() => {
                return <Profile/>
            }}/>
            <Route path={'/messages'} render={() => {
                return <Dialogs/>
            }}/>
            <Route path={'/my-team'} render={() => {
                return <Friends/>
            }}/>
            <Route path={'/choose-football-field'} render={() => {
                return <Search/>
            }}/>
            <Route path={'/football-players'} render={() => {
                return <Users/>
            }}/>
        </div>
    )
}

export default MainContainer;
