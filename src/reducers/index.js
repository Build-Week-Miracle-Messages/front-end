import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    UPDATE_TOKEN,
    LOGOUT_USER,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions'

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    loginError: '',
    registerError: '',
    token: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                token: action.payload.token
            }

        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isLoggingIn: false,
                loginError: action.payload
            }
        }

        case UPDATE_TOKEN: {
            return {
                ...state,
                token: action.payload
            }
        }

        case LOGOUT_USER: {
            return {
                ...state,
                loggedIn: false
            }
        }

        case REGISTER_START: {
            return {
                ...state,
            }
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
            }

        }
        case REGISTER_FAIL: {
            return {
                ...state,
                registerError: action.payload
            }
        }

        default: {
            return state
        }
    }
}