const currentUserReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER': 
            return action.payload.value 
        case 'RESET_CURRENT_USER':
            state = {};
            return state
        default: 
            return state;
    }
}

export default currentUserReducer