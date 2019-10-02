
export const UserAction = (state,dispatch)=>{

    const addUserAction = (newuser) =>{

       
        dispatch({type: 'ADD_USER',newuser});
     

    } 

    const setUserAction = (alluser) =>{

    
        dispatch({type: 'SET_USER',alluser});
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
