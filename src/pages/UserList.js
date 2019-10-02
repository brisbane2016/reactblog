import React, { useState, useContext } from 'react';
import { UserContext } from '../components/User/Context/UserContext';

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const UserList = () => {
    const { users, userActions } = useContext(UserContext);

    console.log(users);


    const [isPaneOpenLeft, setisPaneOpenLeft] = useState(false);

    const handleUserEdit = (id) => {


        alert(id);
        setisPaneOpenLeft(true);
    }


    const handleUserDelete = (id) => {

        alert(id);

        userActions.removeUserAction(id);

    }
    Modal.setAppElement('body');
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
                                        <td><button type="button" className="btn btn-primary"
                                            onClick={() => handleUserEdit(user.id)}>
                                            Edit</button>

                                        </td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => handleUserDelete(user.id)}>Delete</button></td>
                                    </tr>



                                );

                            }



                            )}
                    </tbody>
                </table>

                {/* https://www.npmjs.com/package/react-sliding-pane */}

                <SlidingPane
                    className='sliding-pane-custom'
                    closeIcon={<div><i className="fas fa-times "></i></div>}
                    isOpen={isPaneOpenLeft}

                    from='left'
                    width='600px'
                    onRequestClose={() => setisPaneOpenLeft(false)}>
                    <div>And I am pane content on left.</div>
                </SlidingPane>



            </div>
        </>

    ) : (
            <>
                <p>No more users</p>
            </>


        );
}

export default UserList;