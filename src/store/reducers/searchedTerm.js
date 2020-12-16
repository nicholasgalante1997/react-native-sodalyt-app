const searchedTermReducer = (state = "", action) => {
    switch(action.type){
        case 'SET_SEARCH_TERM': 
            return action.payload.value
        case 'RESET_SEARCHED_TERM':
            state = ""
            return state;
        default: 
            return state;
    }
}

export default searchedTermReducer