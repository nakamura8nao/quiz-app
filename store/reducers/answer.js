const inisialState = {
    answers: []
}

const reducer = (state = inisialState, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {
                ...state,
                answers: [1,2,3]
            }
        default:
            return state;
    }
}

export default reducer;