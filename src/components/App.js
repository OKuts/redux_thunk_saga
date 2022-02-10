import '../styles/App.scss';
import {Operations} from "./Operations";
import {useSelector} from "react-redux";
import {Clients} from "./Clients";

function App() {
    const account = useSelector(state => state.account.cash);
    return (
        <div>
            <div>{`Account: ${account}`}</div>
            <Operations />
            <Clients />
        </div>
    );
}

export default App;
