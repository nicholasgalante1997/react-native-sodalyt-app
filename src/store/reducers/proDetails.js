const profDetailsReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_PROF_DETAILS':
            return action.payload.value
        case 'RESET_PROF_DETAILS':
            state = {};
            return state;
        default: 
        return state;
    }
}

export default profDetailsReducer