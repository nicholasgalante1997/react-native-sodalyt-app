const profDetailsReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_PROF_DETAILS':
            return action.payload.value
        default: 
        return state;
    }
}

export default profDetailsReducer