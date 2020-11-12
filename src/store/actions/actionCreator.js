// answers actions
export const addAnswer = answer => ({type: 'ADD_ANSWER', payload: {value: answer}})

export const setCurrentUser = currentUser => ({type: 'SET_CURRENT_USER', payload: {value: currentUser}})

export const resetAnswers = () => ({type: 'RESET_ANSWERS'})