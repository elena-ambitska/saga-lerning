import {all, call, delay, fork} from "redux-saga/effects";

export function* auth(){
    yield delay(2000)
    console.log('Auth ok')
    return true;
}

export function* loadUsers(){
    const request = yield call(fetch, 'https://swapi.dev/api/people');
    const data  = yield call([request, request.json])
    console.log('Data:', data)
}

export function* loadBasicData() {
    yield all([
        fork(auth),
        fork(loadUsers)
    ])
}