import React, {useContext,useEffect } from 'react';
import { UserContext } from '../components/User/Context/UserContext';

const ImportUser = () => {
    const { users, userActions } = useContext(UserContext);


    const handleGetUsers = () => {
      

      
      
    }

    const handleImportUser = () =>{


        console.log(users);


    }

    useEffect(() => {
       
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