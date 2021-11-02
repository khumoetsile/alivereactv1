import React, { createContext, useReducer, useEffect, useState } from 'react'
import { ACTION_TYPES } from '../store/actions/action_type'
import { initialState, UserReducer } from '../store/reducers/userReducer'
import { toast } from 'react-toastify'
import { GLOBAL_URL } from '../store/GlobalConstants'


const localUser = localStorage.getItem('state');

export const UserContext = createContext();

export const UserStateProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState, () => {
    return localUser ? JSON.parse(localUser) : initialState;
  })
  const [isFetching, setIsFetching] = useState(false)

  //use Localstorage to set initial value after a refresh
  useEffect(() => {
    localUser && dispatch({ type: ACTION_TYPES.REFRESH, payload: JSON.parse(localUser) })
  }, [])

  //save selected states to localstorage on Authentication
  useEffect(() => {
    state.isAuthenticated
      && localStorage.setItem('state',
        JSON.stringify(state, ['username', 'email', 'isLoggedIn', 'isAuthenticated', 'token', 'miniPlayer', 'showCall']))
  }, [state.isAuthenticated])

  //loader for Login and Signup  
  useEffect(() => {
    let loader;
    isFetching ? loader = toast.loading('We are working on it...', { position: 'top-center' }) : toast.dismiss(loader)
  }, [isFetching])


  //handle the input state for user information
  const handleChange = (event) => {
    const { name, value } = event.target
    dispatch({
      type: ACTION_TYPES.ONCHANGE,
      field: name,
      payload: value
    })
  }

  // handle logout 
  const logout = (e, link) => {
    localStorage.removeItem('state')
    window.location.replace('/')
    return (dispatch({ type: ACTION_TYPES.LOGOUT }))

  }

  // handle login
  const login = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      password: state.password,
      username: state.username
    })

    setIsFetching(true);

    fetch(`${GLOBAL_URL}/users/signin?${params}`, {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          res.text()
            .then(data => {
              setIsFetching(false)
              toast('Logged In Successfully', { position: 'top-center' })
              dispatch({ type: ACTION_TYPES.LOGIN, payload: data })
              Authenticate(data)
            })
        }
        else {
          res.json()
            .then(err => {
              setIsFetching(false)
              toast(err.message, { position: 'top-center' })
              dispatch({ type: ACTION_TYPES.SET_LOGIN_ERR, payload: err.message })
            })
        }
      })
      .catch(err => {
        err &&
          setIsFetching(false)
        toast('Network Error', { position: 'top-center' })
      })
  };

  // signup the user
  function signup(event) {
    event.preventDefault();

    setIsFetching(true)
    fetch(
      `${GLOBAL_URL}/users/signup`,
      {
        method: 'POST',
        body: JSON.stringify({
          username: state.username,
          email: state.email,
          password: state.password,
          roles: ["ROLE_ADMIN"]
        }),
        headers: {
          "accept": '*/*',
          'Content-Type': 'application/json'
        },
      }
    )
      .then(res => {
        if (res.status === 200) {
          res.text()
            .then(data => {
              setIsFetching(false)
              toast('Signed In Successfully', { position: 'top-center' })
              dispatch({ type: ACTION_TYPES.SIGNUP, payload: data })
              Authenticate(data)
            })
        }
        else {
          res.json()
            .then(err => {
              setIsFetching(false)
              toast(err.message, { position: 'top-center' })
              dispatch({ type: ACTION_TYPES.SET_SIGNUP_ERR, payload: err.message })
            })
        }
      })
      .catch(err => {
        setIsFetching(false)
        toast('Network Error', { position: 'top-center' })
      })
  }

  //Authentication function
  const Authenticate = (token) => {
    fetch(`${GLOBAL_URL}/users/me`, {
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          res.json()
            .then((data) => {
              dispatch({
                type: ACTION_TYPES.AUTH,
                payload: data
              })
            })
        }
        else {
          res.json()
            .then(data => { console.log(data) })
        }
      })
  }

  //toggle miniplayer 
  const toggleMiniPlayer = () => {
    dispatch({ type: ACTION_TYPES.SET_MINIPLAYER })
  }



  return (
    <UserContext.Provider value={{
      login,
      logout,
      handleChange,
      signup,
      toggleMiniPlayer,
      dispatch,
      AuthStatus: state.isAuthenticated,
      usernameState: state.username,
      passwordState: state.password,
      emailState: state.email,
      token: state.token,
      isLoggedIn: state.isLoggedIn,
      loginErr: state.loginErr,
      signupErr: state.signupErr,
      miniPlayer: state.miniPlayer,

    }}>
      {props.children}
    </UserContext.Provider>
  )
}