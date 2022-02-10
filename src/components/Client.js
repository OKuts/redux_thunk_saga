import {useDispatch} from "react-redux";
import {removeClientAC} from "../redux/clientsReducer";

export const Client = ({client}) => {
    const dispatch = useDispatch()
    return (
        <p onClick={() => dispatch(removeClientAC(client.id))}>{client.name}</p>
    )
}
