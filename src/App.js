import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';
import UserConTextProvider from "./components/User/Context/UserContext";

import AppRouter from './routers/AppRouter';
import {firebase} from './firebase/firebase';


export const history = createBrowserHistory();
function App() {
 
  firebase.auth().onAuthStateChanged((user) => {
   // alert('firebase onAuthStateChanged');
            if (user) {
              console.log('firebase onAuthStateChanged: id' + user.uid);
              localStorage.setItem('user', JSON.stringify(user));
   
            } else {
              console.log('firebase onAuthStateChanged logout');
              localStorage.setItem('user', [])
              
              
            }
        
            history.push('/');
        });
    

  return (

    <Router history={history}>
  
        <UserConTextProvider> 
     
          <AppRouter />
   
        </UserConTextProvider>
      
    </Router>
  );
}


export default App;
