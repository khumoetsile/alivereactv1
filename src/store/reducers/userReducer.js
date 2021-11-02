import { ACTION_TYPES } from '../actions/action_type'

export const initialState = {
  isLoggedIn: false,
  username: '',
  password: '',
  email: '',
  token: '',
  isAuthenticated: false,
  loginErr: '',
  signupErr: '',
  miniPlayer: false,
}

export const UserReducer = ( state, action ) => {
  switch ( action.type )
  {
    case ACTION_TYPES.ONCHANGE:
      return { ...state, [ action.field ]: action.payload }
    case ACTION_TYPES.LOGIN:
    case ACTION_TYPES.SIGNUP:
      return { ...state, isLoggedIn: true, token: action.payload }
    case ACTION_TYPES.AUTH:
      Object.assign( state, action.payload )
      return { ...state, isAuthenticated: true, }
    case ACTION_TYPES.LOGOUT:
      return { isLoggedIn: false, username: '', password: '', token: '', isAuthenticated: false }
    case ACTION_TYPES.SET_LOGIN_ERR:
      return { ...state, loginErr: action.payload }
    case ACTION_TYPES.SET_SIGNUP_ERR:
      return { ...state, signupErr: action.payload }
    case ACTION_TYPES.SET_MINIPLAYER:
      return { ...state, miniPlayer: !state.miniPlayer }
    case ACTION_TYPES.REFRESH:
     return {...action.payload}
    default:
      return { ...state }
  }

}