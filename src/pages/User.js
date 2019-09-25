import React from 'react';

const User = (props) => {
 
 const backtohome=() =>{

    props.history.push('/');
 }
 
 
    return ( 
        <>
                <h1 >User list</h1>

                <button onClick ={backtohome}>Back to home </button>



        </>


     );
}
 
export default User;
   