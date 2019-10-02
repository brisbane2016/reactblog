import React,{useContext} from 'react';
import UserForm from '../components/User/UserForm';
import ImportUser from '../components/ImportUser';
import {UserContext} from '../components/User/Context/UserContext';
const ImportUserPage = () => {
    const {userActions} = useContext(UserContext);
    const handleAddUser= (user) => {

        console.log(user);
         userActions.addUserAction(user);
    }
    return (

        <>
            <div className="row">
                <div className="col-sm-6">

                    <UserForm handlePassUser= {handleAddUser}/>
                </div>
                <div className="col-sm-6">

                    <ImportUser />
                </div>

            </div>

        </>

    );
}

export default ImportUserPage;