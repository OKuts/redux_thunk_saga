import {addManyClientsAC} from "../redux/clientsReducer";

export const usersResponse = () => (dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyClientsAC(json)))
}
