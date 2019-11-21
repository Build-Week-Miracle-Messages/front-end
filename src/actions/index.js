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

export const GET_CASES_START = 'GET_CASES_START'
export const GET_CASES_SUCCESS = 'GET_CASES_SUCCESS'
export const GET_CASES_FAIL = 'GET_CASES_FAIL'

export const GET_CURRENT_CASES_START = 'GET_CURRENT_CASES_START'
export const GET_CURRENT_CASES_SUCCESS = 'GET_CURRENT_CASES_SUCCESS'
export const GET_CURRENT_CASES_FAIL = 'GET_CURRENT_CASES_FAIL'

export const GET_CASE_START = 'GET_CASE_START'
export const GET_CASE_SUCCESS = 'GET_CASE_SUCCESS'
export const GET_CASE_FAIL = 'GET_CASE_FAIL'

export const CREATE_CASE_START = 'CREATE_CASE_START'
export const CREATE_CASE_SUCCESS = 'CREATE_CASE_SUCCESS'
export const CREATE_CASE_FAIL = 'CREATE_CASE_FAIL'

export const UPDATE_CASE_START = 'UPDATE_CASE_START'
export const UPDATE_CASE_SUCCESS = 'UPDATE_CASE_SUCCESS'
export const UPDATE_CASE_FAIL = 'UPDATE_CASE_FAIL'

export const DELETE_CASE_START = 'DELETE_CASE_START'
export const DELETE_CASE_SUCCESS = 'DELETE_CASE_SUCCESS'
export const DELETE_CASE_FAIL = 'DELETE_CASE_FAIL'

export const postLoginUser = payload => dispatch => {
    dispatch({ type: LOGIN_START })
    axios
        .post('https://miracle-message.herokuapp.com/api/auth/login/', payload.credentials)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            dispatch(getCurrentCases)
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

export const getCases = payload => dispatch => {
    dispatch({ type: GET_CASES_START, payload: payload })
    axiosWithAuth()
        .get('https://miracle-message.herokuapp.com/api/cases/all', payload)
        .then(res => dispatch({ type: GET_CASES_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_CASES_FAIL, payload: err }))
}

export const getCurrentCases = payload => dispatch => {
    dispatch({ type: GET_CURRENT_CASES_START, payload: payload })
    axiosWithAuth()
        .get('https://miracle-message.herokuapp.com/api/cases/current', payload)
        .then(res =>  dispatch({ type: GET_CURRENT_CASES_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_CURRENT_CASES_FAIL, payload: err }))
}

export const createCase = payload => dispatch => {
    dispatch({ type: CREATE_CASE_START })
    axiosWithAuth()
        .post('https://miracle-message.herokuapp.com/api/cases', payload)
        .then(res => dispatch({ type: CREATE_CASE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: CREATE_CASE_FAIL, payload: err }))
}

export const updateCase = payload => dispatch => {
    dispatch({ type: UPDATE_CASE_START })
    axiosWithAuth()
        .put(`https://miracle-message.herokuapp.com/api/cases/person/${payload.id}`, {
        })
        .then(res => dispatch({ type: UPDATE_CASE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: UPDATE_CASE_FAIL, payload: err }))
}

export const deleteCase = payload => dispatch => {
    dispatch({ type: DELETE_CASE_START })
    axiosWithAuth()
        .delete(`https://miracle-message.herokuapp.com/api/cases/${payload}`, payload)
        .then(res => dispatch({ type: DELETE_CASE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_CASE_FAIL, payload: err }))
}

export const getCase = payload => dispatch => {
    dispatch({ type: GET_CASE_START })
    axiosWithAuth()
        .get(`https://miracle-message.herokuapp.com/api/cases/${payload}`, payload)
        .then(res => dispatch({ type: GET_CASE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_CASE_FAIL, payload: err }))
}

export const logoutUser = payload => dispatch => {
    dispatch({ type: LOGOUT_USER, payload: payload })
    payload.props.history.push('/login')
}