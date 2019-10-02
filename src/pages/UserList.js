import React, { useContext } from 'react';
import { UserContext } from '../components/User/Context/UserContext';

const UserList = () => {
    const { users } = useContext(UserContext);

    console.log(users);

    const handleUserEdit = (id) => {


        //alert(id);
    }


    const handleUserDelete = (id) => {

        //alert(id);

    }
    return users.length ? (

        <>
            <div>
                <table className="table table-hover table-bordered table-sm">

                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="w-25">ID</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {

                                return (

                                    <tr className="table-light " key={user.id}>
                                        <td >{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address} {user.city} {user.zip}</td>
                                        <td><button type="button" class="btn btn-primary" onClick={handleUserEdit(user.id)}>Edit</button></td>
                                        <td><button type="button" class="btn btn-danger" onClick={handleUserDelete(user.id)}>Delete</button></td>
                                    </tr>



                                );

                            }






                            )}
                    </tbody>
                </table>

            </div>
        </>

    ) : (
            <>
                <p>thest</p>
            </>


        );
}

export default UserList;