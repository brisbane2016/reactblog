import React, { useContext } from 'react';
import UserForm from '../components/User/UserForm';
import ImportUser from '../components/ImportUser';
import { UserContext } from '../components/User/Context/UserContext';
const ImportUserPage = () => {
    const { userActions } = useContext(UserContext);
    const handleAddUser = (user) => {

        console.log(user);
        userActions.addUserAction(user);
    }
    return (

        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="jumbotron w-75">
                        <h1 className="h3 text-left text-capitalize font-weight-bold">Manual Input User information</h1>

                        <UserForm handlePassUser={handleAddUser} />

                    </div>

                </div>
                <div className="col-sm-6">

                    <ImportUser />
                </div>

            </div>

        </>

    );
}

export default ImportUserPage;