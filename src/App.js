import React from 'react';

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import './App.css';
import Header from './components/Header';
import ImportUserPage from './pages/ImportUserPage';
import HomePage from './pages/Home';
import Albums from './pages/Albums';
import User from './pages/User';
import UserConTextProvider from "./components/User/Context/UserContext";
export const history = createBrowserHistory();
function App() {
  return (

    <Router history={history}>
      <UserConTextProvider>

        <div className="container-fluid jumbotron">

          <Header />
          <div className="main pt-5">
              <Route  path="/" component={HomePage} exact={true}   />
              <Route path="/importuserpage" component={ImportUserPage} />
              <Route path="/albums" component={Albums} />
              <Route path="/user" component={User} />
          </div>
        </div>
      </UserConTextProvider>
    </Router>
  );
}

export default App;
