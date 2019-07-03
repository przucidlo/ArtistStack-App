import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './landingpage/LandingPage';

class ApplicationContent extends Component{
    render(){
        return (
            <Router>
                <Route path="/" component={LandingPage}/>
            </Router>
        )
    }
}

export default ApplicationContent;