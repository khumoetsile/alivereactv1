import React, { createContext, useState } from 'react'
import { useFetch } from './CustomHooks'
import { GLOBAL_URL } from '../store/GlobalConstants'

export const BookingContext = createContext()

export const BookingProvider = (props) => {
    const [query, setQuery] = useState('')
    const { data, error, get, setError, setData, deleter } = useFetch(`${GLOBAL_URL}/bookings`);

    const handleSearch = (e) => {
        e.preventDefault();
        setError('');
        setData({});
        get(query);
    }
    return (
        <BookingContext.Provider value={{
            data,
            error,
            handleSearch,
            setData,
            setError,
            query,
            setQuery,
            deleter
        }}>
            {props.children}
        </BookingContext.Provider>
    )
}