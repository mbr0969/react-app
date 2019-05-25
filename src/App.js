import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from  './components/dialogs/Dialogs';
import News from  './components/news/News';
import Music from  './components/music/Music';
import Settings from  './components/settings/Settings';
import {BrowserRouter, Route} from  "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className='grid'>
                <Header />
                <Navbar />
                <div className='grid-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
