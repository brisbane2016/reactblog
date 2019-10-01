import uuid from 'uuid/v1';

export const UserReducer = (state,action) => {
        console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return [ ...state,{
                name: action.newuser.name,
                username: action.newuser.username,
                email: action.newuser.email,
                address: action.newuser.address,
                city: action.newuser.city,
                zip: action.newuser.zip,
                id: uuid()
            }]
        // case 'REMOVE_BOOK':
        //     return state.filter (book=>book.id !== action.id)
        default:
            return state



    }



}