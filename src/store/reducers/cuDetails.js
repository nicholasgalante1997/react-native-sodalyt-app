const cuDetailsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_DETAILS': 
            return action.payload.value
        case 'RESER_USER_DETAILS': 
            state = {};
            return state;
        default: 
            return state;
    }
}

export default cuDetailsReducer