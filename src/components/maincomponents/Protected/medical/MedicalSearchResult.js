import React, { useEffect , useState} from 'react'
import { useTemplateCreator, useFetch } from '../../../../utils/CustomHooks';
import SearchBar from '../../../minorcomponents/Search';
import Select from '../../../minorcomponents/Select'
import { ToastContainer } from 'react-toastify'



const MedicalSearchResult = () => {
    const {get, data, error, setUrl} = useFetch()
    const [ template, setTemplate ] = useTemplateCreator()
    const [query, setQuery] = useState('')
    const [path, setPath] = useState('')

    useEffect( () => {
        error ? setTemplate( error ) : setTemplate( data )
    }, [ error, data ] )

    useEffect(() => {
        path === 'surgery' 
        ? setUrl('/surgery')
        : setUrl(`/medical/${path}`)
    }, [path])

    const handleSearch = (e) => {
        e.preventDefault()
        get(query)
    }
    
    return (
        <div className="">
             <Select name="selectResource" onChange={(e) => {setPath(e.target.value)}} value={path}> 
            <option value="">Select a Medical search option</option>
            <option value="illnessesinfo">Search for Illnesses Information</option>
            <option value="medications">Search for Medications</option>
            <option value="surgery">Search for Surgery Information</option>
            </Select>
            {path && 
            <div  className="mt-2">
            <SearchBar
                onSubmit={ handleSearch }
                onChange={ e => setQuery( e.target.value ) }
                placeholder="Enter ID to search "
               
            />
            <div className={`col-md-12 ${!Object.keys(data).length && "d-none"}`}>
                <h3 className="text-center mt-4">Medical Info</h3>
                {  template }
            </div>
            </div>}
            <ToastContainer />
        </div>
    )
}

export default MedicalSearchResult
