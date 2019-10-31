import React from 'react';
import ImportUserPage from '../pages/ImportUserPage';
import HomePage from '../pages/Home';
import Albums from '../pages/Albums';
import UserListPage from '../pages/UserListPage';
import Login from "../pages/Login";
import PublicRoute from './PublicRoute'; 
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

    return (


        <>
            
            <PrivateRoute path="/" component={HomePage} exact={true} />
            <PrivateRoute path="/importuserpage" component={ImportUserPage} />
            <PrivateRoute path="/albums" component={Albums} />
            <PrivateRoute path="/UserList" component={UserListPage} />
            <PublicRoute path="/login" component={Login} />
        </>

    );
}

export default AppRouter;