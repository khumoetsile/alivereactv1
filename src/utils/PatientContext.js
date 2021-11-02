import React, { createContext, useState } from 'react'
import { useFetch } from './CustomHooks'
import { GLOBAL_URL } from '../store/GlobalConstants'

export const PatientContext = createContext()

export const PatientProvider = (props) => {
    const [query, setQuery] = useState('')
    const { data, error, get, setError, setData, isFetching, deleter } = useFetch(`${GLOBAL_URL}/patients`);

    const handleSearch = (e) => {
        e.preventDefault();
        setError('');
        setData({});
        get(query);
    }
    return (
        <PatientContext.Provider value={{
            data,
            error,
            isFetching,
            handleSearch,
            setData,
            setError,
            query,
            setQuery,
            deleter
        }}>
            {props.children}
        </PatientContext.Provider>
    )
}