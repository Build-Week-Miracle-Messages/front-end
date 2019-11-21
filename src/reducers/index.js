import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    UPDATE_TOKEN,
    LOGOUT_USER,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CREATE_CASE_START,
    CREATE_CASE_SUCCESS,
    CREATE_CASE_FAIL,
    GET_CASES_START,
    GET_CASES_SUCCESS,
    GET_CASES_FAIL,
    GET_CURRENT_CASES_START,
    GET_CURRENT_CASES_SUCCESS,
    GET_CURRENT_CASES_FAIL,
    GET_CASE_START,
    GET_CASE_SUCCESS,
    GET_CASE_FAIL,
    UPDATE_CASE_START,
    UPDATE_CASE_SUCCESS,
    UPDATE_CASE_FAIL,
    DELETE_CASE_START,
    DELETE_CASE_SUCCESS,
    DELETE_CASE_FAIL
} from '../actions'

const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    loginError: '',
    registerError: '',
    token: '',
    deletingCase: false,
    cases: [],
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

        case GET_CASES_START: {
            return {
                ...state,
                gettingCases: true
            }
        }

        case GET_CASES_SUCCESS: {
            return {
                ...state,
                gettingCases: false,
                gotCases: true,
                cases: action.payload
            }
        }

        case GET_CASES_FAIL: {
            return {
                ...state,
                gettingCases: false,
                gotCases: false,
                caseError: action.payload
            }
        }

        case GET_CURRENT_CASES_START: {
            return {
                ...state,
                gettingCases: true
            }
        }

        case GET_CURRENT_CASES_SUCCESS: {
            return {
                ...state,
                gettingCases: false,
                gotCases: true,
                cases: action.payload
            }
        }

        case GET_CURRENT_CASES_FAIL: {
            return {
                ...state,
                gettingCases: false,
                gotCases: false,
                caseError: action.payload
            }
        }

        case DELETE_CASE_START: {
            return {
                ...state,
                deletingCase: true
            }
        }

        case DELETE_CASE_SUCCESS: {
            return {
                ...state,
                deletingCase: false,
                cases: action.payload
            }
        }

        case DELETE_CASE_FAIL: {
            return {
                ...state,
                deletingCase: false,
                caseError: action.payload
            }
        }

        case UPDATE_CASE_START: {
            return {
                ...state,
                creatingCase: true
            }
        }

        case UPDATE_CASE_SUCCESS: {
            return {
                ...state,
                creatingCase: false,
                cases: [...state.cases.filter( el => el.id !== action.payload.id), action.payload ]
            }
        }

        case UPDATE_CASE_FAIL: {
            return {
                ...state,
                creatingCase: false,
                caseError: action.payload
            }
        }

        case CREATE_CASE_START: {
            return {
                ...state,
                creatingCase: true
            }
        }

        case CREATE_CASE_SUCCESS: {
            return {
                ...state,
                creatingCase: false,
                cases: [...state.cases, action.payload]
            }
        }

        case CREATE_CASE_FAIL: {
            return {
                ...state,
                creatingCase: false,
                caseError: action.payload
            }
        }

        default: {
            return state
        }
    }
}