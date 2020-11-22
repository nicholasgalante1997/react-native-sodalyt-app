const searchedTermReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_SEARCH_TERM': 
            return action.payload.value
        default: 
            return state;
    }
}

export default searchedTermReducer