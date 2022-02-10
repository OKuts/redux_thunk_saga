export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'

const defaultState = {
    cash: 5,
}

export const accountReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

export const addCashAC = (cash) => ({type: ADD_CASH, payload: cash})
export const getCashAC = (cash) => ({type: GET_CASH, payload: cash})
