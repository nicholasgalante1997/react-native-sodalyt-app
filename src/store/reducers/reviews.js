const reviewsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_REVIEWS': 
            return action.payload.value;
        case 'ADD_REVIEW':
            return [...state, action.payload.value]
        default:
            return state;
    }
}

export default reviewsReducer;