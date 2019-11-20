import { axiosWithAuth } from '../axios/axiosAuth'
import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const LOGOUT_USER = 'LOGOUT_USER'

export const postLoginUser = payload => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('https://miracle-message.herokuapp.com/api/auth/login/', payload.credentials)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            payload.props.history.push('/')
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }))
}

export const postRegisterUser = payload => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuth()
        .post('https://miracle-message.herokuapp.com/api/auth/register', payload.registerUsers)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }))
}

export const updateToken = payload => dispatch => {
    dispatch({ type: UPDATE_TOKEN, payload: payload })
}

export const logoutUser = payload => dispatch => {
    dispatch({ type: LOGOUT_USER, payload: payload })
    payload.props.history.push('/login')
}