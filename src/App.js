import React from 'react';

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import './App.css';
import Header from './components/Header';
import ImportUser from './pages/ImportUser';
import HomePage from './pages/Home';
import Albums from './pages/Albums';
import User from './pages/User';

export const history = createBrowserHistory();
function App() {
  return (

    <Router history={history}>
      <div>
        <Header />
        <Route  path="/" component={HomePage} exact={true}   />
        <Route path="/importuser" component={ImportUser} />
        <Route path="/albums" component={Albums} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
