import React, { useEffect , useState} from 'react'
import { useTemplateCreator,  useFetch } from '../../../../utils/CustomHooks';
import SearchBar from '../../../minorcomponents/Search';
import Select from '../../../minorcomponents/Select'
import _ from 'lodash'
import {ToastContainer} from 'react-toastify'



const ResourcesSearchResult = () => {
    const {get, data, error, setError, setData} = useFetch(`/resources`)
    const [ template, setTemplate ] = useTemplateCreator()
    const [query, setQuery] = useState('')
    const [path, setPath] = useState('')

    useEffect( () => {
        error ? setTemplate( error ) : setTemplate( data )
    }, [ error, data ] )

    useEffect(() => {
        error && setError('');
        setData({});
        (path && path !== 'clinics') && get(path);
    }, [path])

    const handleSearch = (e) => {
        e.preventDefault()
        setData({})
        setError('');
        get(`${path}/${query}`)
     
    }
    
    return (
        <div className="">
             <Select name="selectResource" onChange={(e) => {setPath(e.target.value)}} value={path}> 
            <option value="">Search for a resource type </option>
            <option value="clinics">Search for clinic</option>
            <option value="countries">Search for country</option>
            <option value="relationship-types">Search for relationship type</option>
            <option value="document-types">Search for document type</option>
            <option value="titles">Search for title</option>
            </Select>
           
            {(path === 'clinics') &&
            <div  className="mt-2">
            <SearchBar
                onSubmit={ handleSearch }
                onChange={ e => setQuery( e.target.value ) }
                placeholder="Enter Clinic code to search "
               
            />
            <div>
                <h3 className="text-center mt-4">Clinic Info</h3>
                { template }
            </div>
            </div>}

            {(path && path !== 'clinics') && <div>
            <h3 className="text-center mt-4">{_.startCase(path)} Info</h3>
            { template }
        </div>}
        <ToastContainer />
        </div>
    )
}

export default ResourcesSearchResult
