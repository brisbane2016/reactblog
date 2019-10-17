

export const UserReducer = (state, action) => {
  console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                name: action.newuser.name,
                username: action.newuser.username,
                email: action.newuser.email,
                address: action.newuser.address,
                city: action.newuser.city,
                zip: action.newuser.zip,
                id: action.newuser.id,
                createDate: action.newuser.createDate,
                updateDate: action.newuser.updateDate
            }]
        case 'EDIT_USER':
            return state.map((user) => {
                
                if (user.id === action.updateuser.id) {
                    return {
                        ...user,
                        ...action.updateuser
                    };
                } else {
                    return user;
                };
            });
        case 'REMOVE_USER':
            return state.filter(user => user.id !== action.id)

        case 'SET_USER':
             

                return action.allusers;    
        default:
            return state

    }

    


}