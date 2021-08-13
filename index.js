import { createStore, combineReducer } from "./redux.js";

const counterReducer = (state=0, action) => {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

const userReducer = (state= [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REM':
            let updatedUser = state.filter(val => val !== action.payload)
            return updatedUser;
        default:
            return state;
    }
}
const rootReducer = combineReducer({
    count: counterReducer,
    users: userReducer,
})
window.store = createStore(rootReducer);
store.subscribe((state) => console.log("Listner", state))
