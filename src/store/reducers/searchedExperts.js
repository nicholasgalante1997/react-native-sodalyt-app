const searchedExpertsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_SEARCHED_EXPERTS_RESPONSE': 
            return action.payload.value
        default: 
            return state;
    }
}

export default searchedExpertsReducer