import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"

import {accountReducer} from "./accountReducer";
import {clientsReducer} from "./clientsReducer";

const rootReducer = combineReducers({
    account: accountReducer,
    clients: clientsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
