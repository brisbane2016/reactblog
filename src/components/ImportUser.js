import React, {useContext,useState, useEffect } from 'react';
import { UserContext } from '../components/User/Context/UserContext';
import database from '../firebase/firebase';

const ImportUser = () => {
    const { users, userActions } =useContext(UserContext);
    const [firebaseUsers, setFirebaseUsers] = useState({});

    const handleGetUsers = () => {
        alert('s');
        database.ref(`users`).once('value').then((snapshot) => {
            const list = [];

            snapshot.forEach((childSnapshot) => {
                console.log(childSnapshot.val());
                list.push({

                    ...childSnapshot.val()
                });
            });

            setFirebaseUsers(list);
        });
    }

    const handleImportUser = () =>{


        console.log(users);
        alert('s');

        users.map((user) => {
            database.ref(`users`).push(user);

        });


    }

    useEffect(() => {
        console.log(firebaseUsers);
    }, [firebaseUsers,users]);


    return (
        <>
            <h1 className="h3 text-left text-capitalize font-weight-bold">import user auto</h1>

            <button className="btn btn-outline-danger" onClick={() => handleGetUsers()}>Get User List</button>
            <button className="btn btn-outline-danger" onClick={() => handleImportUser()}>import state</button>
            {
                firebaseUsers.length ? (


                    firebaseUsers.map((user) => (
                        <>
                        <div key={user.id}>
                            <p >{user.id}</p>
                            <p>{user.username}</p>
                        </div>
                           
                        </>
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