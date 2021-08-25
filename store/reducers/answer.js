const inisialState = {
    answers: {'q1': '', 'q2': '', 'q3': ''}
}

const reducer = (state = inisialState, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {
                ...state,
                answers: [1,2,3]
            }
        case 'CLEAR_ANSWER':
            return {
                ...state,
                answers: {'q1': '', 'q2': '', 'q3': ''}
            }
        default:
            return state;
    }
}

export default reducer;