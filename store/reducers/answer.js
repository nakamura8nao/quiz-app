const inisialState = {
    correctCount: 0
}

const reducer = (state = inisialState, action) => {
    switch (action.type) {
        case 'ADD_CORRECT':
            return {
                correctCount: state['correctCount'] + 1
            }
        case 'CLEAR_CORRECT':
            return {
                correctCount: 0
            }
        default:
            return state;
    }
}

export default reducer;