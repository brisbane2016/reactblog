import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../components/User/Context/UserContext';

import moment from 'moment';

const ImportUser = () => {
    const { users, userActions } = useContext(UserContext);
    const jsonURL = "https://jsonplaceholder.typicode.com/users";
    const [jsonData, setJsonData] = useState({});

    const handleGetUsers = () => {




    }

    const handleImportUser = () => {



        fetch(jsonURL)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log(result);
                const currentDate = moment().format('LLL');

                const getJsonData = result.map((user) => {

                    const newUser = {

                        name: user.name,
                        username: user.username,
                        email: (user.email).toLowerCase(),
                        address: user.address.street,
                        city: user.address.city,
                        zip: user.address.zipcode,
                        createDate: currentDate,
                        updateDate: currentDate
                    };
                    //  console.log(newUser);
                    userActions.addUserAction(newUser);
                    return newUser;
                });

                setJsonData(getJsonData);


            });




        console.log(users);


    }

    useEffect(() => {

    }, [users]);


    return (
        <>
            <h1 className="h3 text-left text-capitalize font-weight-bold">import user auto</h1>

            <button className="btn btn-outline-danger" onClick={() => handleGetUsers()}>Get User List</button>


            <div className="form-group row disabled">
                <label className="col-form-label col-sm-2" >Import URL</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control " placeholder="Default input" disabled={true} value={jsonURL} />
                </div>

            </div>
            <div className="float-left">
                <button className="btn btn-outline-danger" onClick={() => handleImportUser()}>import state users</button>

            </div>
            <div className="clearfix"></div>

            {
                jsonData && jsonData.length ? (


                    jsonData.map((user, index) => (

                        <div key={index}>
                            <p >{index}: {user.name} ,{user.email} </p>

                        </div>


                    )

                    )
                ) : (

                        <p>no user</p>
                    )

            }

        </>


    )
}

export default ImportUser;