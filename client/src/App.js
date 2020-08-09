import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ContentApp from "./components/ContentApp/ContentApp";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import {useSelector} from "react-redux";

function App(props) {
    const isAuth = useSelector((state) => state.auth.isAuth);
    return (
        <div>
            <Header isAuth={isAuth}/>s
            {isAuth
                ? <ContentApp/>
                : <StartPage/>
            }
            <Footer/>
        </div>
    )
}

export default App;
