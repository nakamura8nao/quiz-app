import {createStore, combineReducers} from 'redux';
import answerReducer from './reducers/answer';

const rootReducer = combineReducers({
    answer: answerReducer
})

const store = createStore(rootReducer);

export default store;