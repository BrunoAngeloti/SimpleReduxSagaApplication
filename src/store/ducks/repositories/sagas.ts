import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import { loadSuccess, loadFailure } from '../repositories/actions'

export function* load({payload} : any): any{
    try{
        const response = yield call(api.get, `/users/${payload}/repos`)
        yield put(loadSuccess(response.data))
    }catch(err){
        yield put(loadFailure())
    }
}

export function freteGratis (valor: number) {
    return valor >= 150
}