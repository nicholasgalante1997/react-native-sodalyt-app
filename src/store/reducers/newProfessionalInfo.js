const newProfessionalInfoReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_INFO':
            return action.payload.value;
        case 'ADD_INFO':
            return {...state, ...action.payload.value}
        case 'RESET_INFO':
            state = {}
            return state;
        default: 
            return state;
    }
}

export default newProfessionalInfoReducer