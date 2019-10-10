import React, {useContext,useEffect } from 'react';
import { UserContext } from '../components/User/Context/UserContext';
//import database from '../firebase/firebase';

const ImportUser = () => {
    const { users, userActions } = useContext(UserContext);


    const handleGetUsers = () => {
     
      userActions.setUserAction();

      
    }

    const handleImportUser = () =>{


        console.log(users);
        alert('s');

        // users.map((user) => {
        //     database.ref(`users`).push(user);

        // });


    }

    useEffect(() => {
        console.log(users);
    }, [users]);


    return (
        <>
            <h1 className="h3 text-left text-capitalize font-weight-bold">import user auto</h1>

            <button className="btn btn-outline-danger" onClick={() => handleGetUsers()}>Get User List</button>
            <button className="btn btn-outline-danger" onClick={() => handleImportUser()}>import state users</button>
            {
                users && users.length ? (


                    users.map((user) => (
                  
                        <div key={user.id}>
                            <p >{user.id}</p>
                            <p>{user.username}</p>
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