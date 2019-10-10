import database from '../../../firebase/firebase';

export const UserAction = (state,dispatch)=>{

    const addUserAction = (newuser) =>{

       
        dispatch({type: 'ADD_USER',newuser});
     

    } 

    const setUserAction = () =>{

        database.ref(`users`).once('value').then((snapshot) => {
            const allusers = [];

            snapshot.forEach((childSnapshot) => {
               
                allusers.push({

                    ...childSnapshot.val()
                });
            });
      
            dispatch({type: 'SET_USER',allusers});
        });
        
    }    

       
    const updateUserAction = (updateuser) =>{
        dispatch({type: 'EDIT_USER',updateuser});
      
    } 


    const removeUserAction = (id) =>{

       
        dispatch({type: 'REMOVE_USER',id});
      
    } 


    return {
        addUserAction,
        removeUserAction,
        setUserAction,
        updateUserAction

    }
}
