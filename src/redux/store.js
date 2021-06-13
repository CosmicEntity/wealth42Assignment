import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import {loginReducer} from './reducers/loginReducer.js';


function configureStore(
    state={
        loginState:{}
    }
){
    return createStore(
        loginReducer,
        state,
        applyMiddleware(reduxThunk)
    )
}

export default configureStore;