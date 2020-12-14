export default (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_NEW_PROF':
            return action.payload.value 
        default: 
            return state
    }
} 

