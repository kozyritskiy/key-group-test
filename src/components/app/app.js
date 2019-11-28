import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StepOne from "../step-one";
import StepTwo from "../step-two";
import StepThree from "../step-three";
import StepFour from "../step-four";
import StepFive from "../step-five";

import "./app.scss";

export default class App extends Component {
 
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <main className='main-content'>          
            <Switch>
              <Route path='/' render={() => <StepOne />} exact />
              <Route path='/step-two' render={() => <StepTwo />} />
              <Route path='/step-three' render={() => <StepThree />} />
              <Route path='/step-four' render={() => <StepFour />} />
              <Route path='/step-five' render={() => <StepFive />} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
