import { useCallback, useState, useContext, useEffect } from 'react';
import _ from 'lodash';
import { UserContext } from './UserContext';
import { toast } from 'react-toastify'
import { GLOBAL_URL } from '../store/GlobalConstants'

// This hook allows you to toggle booleans without having to set state everytime
export const useToggle = (initialState = false) => {

  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle]
}



//custom fetch hook for the four most basic fetch calls with authentication and notification
export const useFetch = (url) => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [contentType, setContentType] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [toastmsg, setToastmsg] = useState('')
  let [fetchUrl, setFetchUrl] = useState(`${GLOBAL_URL}${url}`)
  const controller = new AbortController()
  const { signal } = controller


  useEffect(() => {
    let loader;
    isFetching ? loader = toast.loading('We are working on it...', { position: 'top-center' }) : toast.dismiss(loader);
  }, [isFetching])

  useEffect(() => {
    let popup;
    toastmsg && (popup = toast(toastmsg, { position: 'top-center' }))
    setToastmsg('')
  }, [toastmsg])

  useEffect(() => {
    return () => {
      controller.abort()
    }
  }, [])

  let options = {
    signal,
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Access-Control-Max-Age': 9000,
      Authorization: `Bearer ${token}`,
      accept: '*/*',
      'Content-Type': contentType ? contentType : 'application/json'
    }
  }
  const allCalls = (type, params, body) => {
    switch (type) {
      case 'get':
        typeof params === 'object' ? fetchUrl += (new URLSearchParams(params)).toString() : fetchUrl += "/" + params;
        break;
      case 'post':
        options.method = 'POST'
        options.body = JSON.stringify(body);
        break;
      case 'put':
        options.method = 'PUT'
        options.body = JSON.stringify(body);
        break;
      case 'delete':
        options.method = 'DELETE'
        typeof params === 'object' ? fetchUrl += (new URLSearchParams(params)).toString() : fetchUrl += "/" + params;
        break;
      default:
        break;
    }

    setIsFetching(true);


    fetch(fetchUrl, options)

      .then(res => {
        switch (res.status) {
          case 200:
            return res.json();
          case 204:
            setError('Deleted Successfully');
            setToastmsg('Deleted Successfully')
            break;
          default:
            return res.json()
              .then(json => {
                setIsFetching(false);
                setError(json.message);
                setToastmsg(json.message)
              })
        }
      })

      .then((json) => {
        setIsFetching(false);
        json && setToastmsg('Success')
        return json && setData(json)
      })

      .catch((err) => {
        setIsFetching(false);
        setError('Please check your internet connection, If that fails to solve the problem log in again')
        setToastmsg('Please check your internet connection, If that fails to solve the problem log in again')
      })

  }

  const get = (params) => { allCalls('get', params) }
  const post = (body) => { allCalls('post', '', body) }
  const deleter = (params) => { allCalls('delete', params) }
  const put = (body) => { allCalls('put', '', body) }

  const setUrl = useCallback((param) => setFetchUrl(`${GLOBAL_URL}${param}`), [])


  return { data, error, get, post, deleter, put, setError, setData, isFetching, setIsFetching, setUrl, setContentType }
}


// This hook allows the building of a print ready document using the results of an API call that returns an object

export const useTemplateCreator = (obj) => {

  const [object, setobj] = useState(obj)

  let template;

  if (typeof object === 'string') {
    template = <h5 className="text-center text-info"> {object} </h5>;
  }
  else {
    template = [];
    const loop = (object, place) => {
      for (const i in object) {
        let value = object[i];
        if (value !== undefined && i !== 'id') {
          if (value && typeof value === 'object') {
            template.push(<h5>{_.startCase(i)}</h5>)
            loop(value, i);
          } else {
            i === 'dob' ?
              template.push(<p className="text-capitalize" key={value}><b>Date of Birth :</b>  {value}</p>)
              : template.push(<p className="text-capitalize" key={value}><b>{_.startCase(i)} :</b>  {value}</p>)
          }
        }
      }
    }
    loop(object);
  }
  const setTemplate = useCallback((param) => setobj(param), [])

  return [template, setTemplate]
}


// export const faker = JSON.parse( '{"bloodPressure": "string","bookingRef": "string","current_complaints": "string","height": "string","oxygenSaturation": "string","pulseReading": "string","template": "string","weight": "string","patientBasicInfo": {"address": "string","avatar": "string","dob": "string","email": "string","firstname": "string","gender": "string","id": 0,"idNumber": "string","lastname": "string","maritalStatus": "string","mobile": "string","occupation": "string","title": "string"},"clinic": "string","dateBooked": "string","timeSlot": "string","doctor": "string"}' )
export const faker = JSON.parse('{"bloodPressure":"string","bookingRef":"stringg","current_complaints":"string","height":"string","oxygenSaturation":"string","pulseReading":"string","template":"string","weight":"string","patientBasicInfo":{"address":"string","avatar":"string","dob":"string","email":"string","firstname":"string","gender":"string","idNumber":"string","lastname":"string","maritalStatus":"string","mobile":"string","occupation":"string","title":"string"},"clinic":"string","dateBooked":"string","timeSlot":"string","doctor":"string"}')
