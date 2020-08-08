import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ContentApp from "./components/ContentApp/ContentApp";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";

function App(props) {
    return (
        <div>
            <Header/>
            {props.auth
                ? <ContentApp/>
                : <StartPage />
            }
            <Footer/>
        </div>
    )
}

export default App;
