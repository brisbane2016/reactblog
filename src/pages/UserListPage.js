import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../components/User/Context/UserContext';
import UserForm from '../components/User/UserForm';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


//
///
//  put user action : update or add into props , to check it is update or add , need remove title's funtion
///
const UserList = () => {

    const { users, userActions } = useContext(UserContext);
    const [isPaneOpenLeft, setisPaneOpenLeft] = useState(false);
    const [updateUser, setupdateUser] = useState({});
    const [userAction, setUserAction] = useState('ADD');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [removeID, setRemoveID] = useState('');


    // when cleck signle edit button , 1. find user by ID . 2. put user to state: updateUser. 
    // 3. open "user form" window. 4. record this "userAction" to "Update" 
    const handleUserEdit = (id) => {
        const thisUser = users.find(user => user.id === id);
        setupdateUser(thisUser);
        setisPaneOpenLeft(true);
        setUserAction('UPDATE');
    }
    // when cleck add button , 1. remove updateUser state date, because "userform" use "updateUser" content to check
    // this auction is update or add.
    //2. open "userform " window
    //3. record this user action to "add"

    const handleUserAdd = () => {
        setupdateUser({});
        setisPaneOpenLeft(true);
        setUserAction('ADD');
    }

    // handle  user form 's action : update and ADD.
    const handlePassUser = (user) => {
        if (userAction === "UPDATE") {

            const { id } = updateUser;
            const newuser = { id, ...user };
            userActions.updateUserAction(newuser);
            setisPaneOpenLeft(false);

        } else {

            userActions.addUserAction(user);
            setisPaneOpenLeft(false);

        }

    }
    useEffect(() => {
        console.log(updateUser)
    }, [updateUser]);

    const handleUserDelete = (id) => {

        handleDialogClickOpen();

        setRemoveID(id);

    }
    const confirmRemoveUserAction = () => {

        userActions.removeUserAction(removeID);
        handleDialogClose();
    }


    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };


    Modal.setAppElement('div');


    return (
        <>
            <div className="row mb-3">
                <button type="button" className="btn btn-outline-danger" onClick={() => handleUserAdd()}>Add new user</button>
            </div>

            {
                users.length ? (

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
                                <UserForm
                                    handlePassUser={handlePassUser}
                                    updateUser={updateUser}

                                />
                            </SlidingPane>



                        </div>
                    </>

                ) : (
                        <>
                            <p>No more users</p>
                        </>


                    )



            }
            {/* https://material-ui.com/components/dialogs/ */}
           
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Do you want to delete this user</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Delete this user will delete everything relate with this user.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Disagree
                </Button>
                    <Button onClick={confirmRemoveUserAction} color="primary" autoFocus>
                        Agree
                </Button>
                </DialogActions>
            </Dialog>


        </>



    )



}

export default UserList;