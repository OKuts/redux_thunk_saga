import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../asyncActions/saga'

import {accountReducer} from "./accountReducer";
import {clientsReducer} from "./clientsReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    account: accountReducer,
    clients: clientsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
