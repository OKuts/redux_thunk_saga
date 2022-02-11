import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addClientAC} from "../redux/clientsReducer";
import {Client} from "./Client";
import {usersResponse} from "../asyncActions/thunk/usersResponse";

export const Clients = () => {
    const [name, setName] = useState('')
    const clients = useSelector(state => state.clients.clientsList)
    const dispatch = useDispatch()

    const addClientHandler = () => {
        dispatch(addClientAC({id: Date.now(), name}))
        setName('')
    }

    return (
        <>
            <input
                type="text"
                placeholder={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <button onClick={addClientHandler}>Add</button>
            <button onClick={() => dispatch({type: 'LOAD_CLIENTS'})}>Add from db</button>
            {clients.length
                ? clients.map(client => <Client key={client.id} client={client} />)
                : <p>Clients empty</p>
            }
        </>
    )
}
