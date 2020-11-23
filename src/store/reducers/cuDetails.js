const cuDetailsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_DETAILS': 
            return action.payload.value
        default: 
            return state;
    }
}

export default cuDetailsReducer