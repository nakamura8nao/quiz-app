const inisialState = {
    answers: []
}

const reducer = (state = inisialState, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':

            const answerList = state['answers'].slice();
            const answer = Object.assign({}, action['answer']);
            answerList.push(answer);

            console.log(answerList);

            return {
                answers: answerList
            }
        case 'CLEAR_ANSWER':
            return {
                answers: []
            }
        default:
            return state;
    }
}

export default reducer;