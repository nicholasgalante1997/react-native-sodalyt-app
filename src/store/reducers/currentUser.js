const currentUserReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER': 
            return action.payload.value 
        default: 
            return state;
    }
}

export default currentUserReducer