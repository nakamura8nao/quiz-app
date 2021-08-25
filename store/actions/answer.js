export const addAnswer = ({answer}) => {
    return {
        type: 'ADD_ANSWER',
        answer,
    };
};