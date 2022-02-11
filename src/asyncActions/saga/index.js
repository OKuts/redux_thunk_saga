import {watchAddClientsSaga} from "./addClientsSaga";

export default function* rootSaga() {
    console.log('Sagas ready!')
    yield watchAddClientsSaga()
}
