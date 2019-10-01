import React from 'react';
import UserForm from '../components/UserForm';
import ImportUser from '../components/ImportUser';

const ImportUserPage = () => {
    return (

        <>
            <div className="row">
                <div className="col-sm-6">

                    <UserForm />
                </div>
                <div className="col-sm-6">

                    <ImportUser />
                </div>

            </div>

        </>

    );
}

export default ImportUserPage;