
export const UserAction = (state,dispatch)=>{

    const addUserAction = (newuser) =>{

       
        dispatch({type: 'ADD_USER',newuser});
     

    } 

    const removeUserAction = (id) =>{

       
        dispatch({type: 'REMOVE_BOOK',id});
      
    } 


    return {
        addUserAction,
        removeUserAction
    }
}
