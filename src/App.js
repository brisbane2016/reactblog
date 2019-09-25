import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import './App.css';
import Header from './components/Header';
import ImportData from './pages/ImportData';
import HomePage from './pages/Home';
import Albums from './pages/Albums';
import User from './pages/User';

export const history = createBrowserHistory();
function App() {
  return (

    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/import" component={ImportData} />
        <Route path="/albums" component={Albums} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
