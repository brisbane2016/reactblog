import database from '../../../firebase/firebase';

export const UserAction = (state,dispatch)=>{

    const addUserAction = (adduser) =>{
        alert('add user action');

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

    // https://firebase.google.com/docs/reference/js/firebase.database
    // mulit user update at same time solution 
    // If you need per-user storage in the database,
    //  it doesn't make sense to store everyone's data in the same location in the database. 
    //  Instead, use Firebase Authentication to get your users logged in with a unique user id, 
    //  and use that user id to store user data in a dedicated location in the database.
    const updateUserAction = (updateuser) =>{
      
        const updateUserNoID = {...updateuser};
        delete updateUserNoID.id;
       
        const {id}= updateuser;

        database.ref(`users/${id}`).once("value").then((snapshot)=>{

            if(snapshot.exists()){
                database.ref(`users/${id}`).update(updateUserNoID).then(() => {
                    dispatch({type: 'EDIT_USER',updateuser});
                  });
              
            }else{

                alert("error");
            }
        })

       
        
      
    } 


    const removeUserAction = (id) =>{

        alert(id);

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
