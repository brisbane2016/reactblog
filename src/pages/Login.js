import React from 'react';
import { firebase, googleAuthProvider } from '../firebase/firebase';

const Login = () => {

    const btnClickLogin = () => {

        firebase.auth().signInWithPopup(googleAuthProvider);

    }


    return (

        <div className="row min-vh-100 justify-content-center align-items-center bg-light">

            <div className="loginbox  bg-primary w-25 p-5 rounded">
                <div className="box">
                    <h3 className="text-center text-white mb-4">Account Login</h3>



                    <button type="button" className="btn btn-danger btn-lg btn-block" onClick={btnClickLogin}>
                        Sign with Google Account
                    </button>
                </div>
            </div>



        </div>


    );
}

export default Login;



