import React, { useState, useEffect } from 'react'
import { useTemplateCreator, useFetch } from '../../../../utils/CustomHooks';
import SearchBar from '../../../minorcomponents/Search';
import {ToastContainer} from  'react-toastify'




const VisitSearchResult = () => {
    const {get, data, error, setData, setError} = useFetch(`/visits`)
    const [ template, setTemplate ] = useTemplateCreator()
    const [query, setQuery] = useState('')


    useEffect( () => {
        error ? setTemplate( error ) : setTemplate( data )
    }, [ error, data ] )

    const handleSearch = (e) => {
        setError('');
        setData({})
        e.preventDefault()
        get(query)
        
    }

    return (
        <div className="container mt-3">
            <SearchBar
                onSubmit={ handleSearch }
                onChange={ e => setQuery( e.target.value ) }
                placeholder="Enter Booking Ref to search "
            />
            <div>
                <h3 className="text-center mt-4">Visit Info</h3>
                { template }
            </div>
            <ToastContainer />
        </div>
    )
}

export default VisitSearchResult
