//Reducers do Redux
import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    //Estado controlado pela aplicação
    todo: todoReducer 
});

export default rootReducer;
