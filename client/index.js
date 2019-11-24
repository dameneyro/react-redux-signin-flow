import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import normalize from './styles/normalize.css';
import styles from './styles/styles.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupDisplay from './components/SignupDisplay.jsx';
import VerificationDisplay from './components/VerificationDisplay.jsx';
import ConfirmationDisplay from './components/ConfirmationDisplay.jsx';

render(
  // <div>
  //   <Router>
  //     <Switch>
  //       <Route path="/" exact component={SignupDisplay} />
  //       <Route path="/verification" component={VerificationDisplay} />
  //       <Route path="/confirmation" component={ConfirmationDisplay} />
  //     </Switch>
  //   </Router>
  // </div>,
  <Provider store={store}><App/></Provider>,
  document.getElementById('app')
);