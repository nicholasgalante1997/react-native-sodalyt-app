const initialState = []

const answersReducer = (state=initialState, action) => {
    switch (action.type){
        case 'ADD_ANSWER': 
            return [...state, action.payload.value]
        default: 
            return state;
    }
}

export default answersReducer