import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
         <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />  
                        <Route exact path="/about" component={ AboutScreen } />   
                        <Route exact path="/login" component={ LoginScreen } />  

                        <Redirect to="/" /> 
        
                        {/* En lugar de "Redirect" podriamos utilizar un condicional de Route cuando el enlace no se encuentra y direccionar
                        a un 404 de la siguiente manera:
                        
                        <Route component={ 404Component } />

                        */}
                    
                    </Switch> 

                </div>

            </div>
        </Router>
    )
}
