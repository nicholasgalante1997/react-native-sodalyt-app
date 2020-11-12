const initialState = []

const answersReducer = (state=initialState, action) => {
    switch (action.type){
        case 'ADD_ANSWER': 
            return [...state, action.payload.value];
        case 'RESET_ANSWERS':
            state = initialState;
            return state;
        default: 
            return state;
    }
}

export default answersReducer