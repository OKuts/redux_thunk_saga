export const ADD_CLIENT = 'ADD_CLIENT'
export const ADD_MANY_CLIENTS = 'ADD_MANY_CLIENTS'
export const REMOVE_CLIENT = 'REMOVE_CLIENT'

const defaultState = {
    clientsList: [],
}

export const clientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CLIENTS:
            return {...state, clientsList: [...state.clientsList, ...action.payload]}
        case ADD_CLIENT:
            return {...state, clientsList: [...state.clientsList, action.payload]}
        case REMOVE_CLIENT:
            return {...state, clientsList: state.clientsList.filter(client => client.id !== action.payload)}
        default:
            return state
    }
}

export const addClientAC = (client) => ({type: ADD_CLIENT, payload: client})
export const addManyClientsAC = (list) => ({type: ADD_MANY_CLIENTS, payload: list})
export const removeClientAC = (id) => ({type: REMOVE_CLIENT, payload: id})
