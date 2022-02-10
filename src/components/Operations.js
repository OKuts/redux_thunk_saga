import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_CASH, addCashAC, GET_CASH, getCashAC} from "../redux/accountReducer";

export const Operations = () => {
    const dispatch = useDispatch()
    const [operationName, setOperationName] = useState(ADD_CASH)
    const [value, setValue] = useState('')


    const toggle = (e) => {
        setOperationName(e.target.textContent === ADD_CASH ? GET_CASH : ADD_CASH)
    }

    const doOperation = () => {
        dispatch(operationName === ADD_CASH ? addCashAC(Number(value)) : getCashAC(Number(value)))
        setValue('')
    }

    return (
        <>
            <div onClick={toggle}>{operationName}</div>
            <input
                type="number"
                placeholder={'amount'}
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            <button onClick={doOperation}>Do</button>
        </>
    )
}
