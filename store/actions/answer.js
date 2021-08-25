export const addAnswer = ({answer}) => {
    return {
        type: 'ADD_ANSWER',
        answer,
    };
};

export const clearAnswer = () => {
    return {
        type: 'CLEAR_ANSWER',
    };
};