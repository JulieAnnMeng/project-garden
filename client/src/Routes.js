import {Switch, Route} from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/home/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Auth from './api_config/Auth';

function Routes() {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path='/signup'>
                    <Signup />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;