const newProfessionalInfoReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_INFO':
            return action.payload.value;
        case 'ADD_INFO':
            return {...state, ...action.payload.value}
        default: 
            return state;
    }
}

export default newProfessionalInfoReducer