import React, { createContext, useReducer, useEffect } from 'react';
import{UserReducer} from "../Reducer/UserReducer";
import {UserAction} from "../Action/UserAction";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [users, dispatch] = useReducer(UserReducer, [], () => {

        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : [];
    });

    const userActions = UserAction(users, dispatch);

    // watching  books state. 
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users]);

    return (
        <UserContext.Provider value={{ users, dispatch, userActions }}>
            {props.children}
        </UserContext.Provider>

    )
}
export default UserContextProvider;

