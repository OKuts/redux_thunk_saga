import {takeLeading, put, call, fork} from 'redux-saga/effects'
import {addManyClientsAC} from "../../redux/clientsReducer";
import {api} from "../../api";

function* workerAddClientsSaga() {
    const data = yield call(api.getUsers, 'hello'); //args
    yield put(addManyClientsAC(data))
}

function* workerParallelSaga() {
    // fork / spawn
    yield fork(workerAddClientsSaga) // saga 1
    // yield fork(workerAddClientsSaga) !!!! next parallel saga 2
}

export function* watchAddClientsSaga() {
    yield takeLeading('LOAD_CLIENTS', workerParallelSaga)
}
