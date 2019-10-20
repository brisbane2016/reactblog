import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

import UserConTextProvider from "./components/User/Context/UserContext";
import AppRouter from './routers/AppRouter';

export const history = createBrowserHistory();
function App() {
  return (

    <Router history={history}>
      <UserConTextProvider>
          <AppRouter />
        
      </UserConTextProvider>
    </Router>
  );
}

export default App;
