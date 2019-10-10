import database from '../../../firebase/firebase';

export const UserAction = (state,dispatch)=>{

    const addUserAction = (adduser) =>{

        database.ref(`users`).push(adduser).then((ref)=> {

            const newuser ={id: ref.key,...adduser};

            dispatch({type: 'ADD_USER',newuser});
        })
      
     

    } 

    const setUserAction = () =>{

        database.ref(`users`).once('value').then((snapshot) => {
            const allusers = [];

            snapshot.forEach((childSnapshot) => {
               
                allusers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
          
            dispatch({type: 'SET_USER',allusers});
        });
        
    }    

       
    const updateUserAction = (updateuser) =>{
      
        const updateUserNoID = {...updateuser};
        delete updateUserNoID.id;
       
        const {id}= updateuser;

        database.ref(`users/${id}`).update(updateUserNoID).then(() => {
            dispatch({type: 'EDIT_USER',updateuser});
          });
      
        
      
    } 


    const removeUserAction = (id) =>{

        database.ref(`users/${id}`).remove().then(() => {
            dispatch({type: 'REMOVE_USER',id});
          });
      
      
    } 


    return {
        addUserAction,
        removeUserAction,
        setUserAction,
        updateUserAction

    }
}
