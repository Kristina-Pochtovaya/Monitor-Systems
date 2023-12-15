import { combineReducers, createStore } from 'redux';
import { login, profileData } from './reducer';


const rootReducer = combineReducers({
    profileData,
    login
})

export const store = createStore(rootReducer)