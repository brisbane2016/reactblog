import React, { createContext, useReducer, useEffect } from 'react';
import {UserReducer} from "../Reducer/UserReducer";
import {UserAction} from "../Action/UserAction";
import database from '../../../firebase/firebase';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [users, dispatch] = useReducer(UserReducer, [], () => {

        database.ref(`users`).once('value').then((snapshot) => {
            const alluser = [];

            snapshot.forEach((childSnapshot) => {
               
                alluser.push({

                    ...childSnapshot.val()
                });
            });
      
            dispatch({type: 'SET_USER',alluser});
        });
        
    });

    const userActions = UserAction(users, dispatch);


    // watching  books state. 
    useEffect(() => {
       
        //localStorage.setItem('users', JSON.stringify(users))
        console.log(users);
    }, [users]);

    return (
        <UserContext.Provider value={{ users, dispatch, userActions }}>
            {props.children}
        </UserContext.Provider>

    )
}
export default UserContextProvider;

