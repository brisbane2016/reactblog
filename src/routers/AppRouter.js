import React from 'react';

import ImportUserPage from '../pages/ImportUserPage';
import HomePage from '../pages/Home';
import Albums from '../pages/Albums';
import UserListPage from '../pages/UserListPage';

import PublicRoute from './PublicRoute';
const AppRouter = () => {
    return (


        <>

            <PublicRoute path="/" component={HomePage} exact={true} />
            <PublicRoute path="/importuserpage" component={ImportUserPage} />
            <PublicRoute path="/albums" component={Albums} />
            <PublicRoute path="/UserList" component={UserListPage} />

        </>

    );
}

export default AppRouter;