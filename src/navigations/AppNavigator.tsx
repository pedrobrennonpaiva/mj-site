import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import '../styles/app.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../screens/Home';

const PersonRoute = ({ component: Component, ...rest } : any) => (
    <Route
      {...rest}
      render={props =>
        <div>
            <Header />
            <Component {...props} />
            <Footer />
        </div>
      }
    />
);

export default () => {
    return (
        <Router>
            <div>
                <Switch>
                    {/* User */}
                    <PersonRoute exact path={["/"]} component={Home} />

                    {/* Default */}
                    <Route path="*" component={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        </Router>
    );
}