import React, { useEffect, useContext } from 'react'
import { useTemplateCreator} from '../../../../utils/CustomHooks';
import SearchBar from '../../../minorcomponents/Search';
import ButtonDanger from '../../../minorcomponents/ButtonDanger'
import ButtonSecondary from '../../../minorcomponents/ButtonSecondary'
import { Link } from 'react-router-dom'
import { PatientContext } from '../../../../utils/PatientContext';
import { ToastContainer } from 'react-toastify'



const PatientSearchResult = () => {
    const [template, setTemplate] = useTemplateCreator();
    const { data, error, query, setQuery, handleSearch, deleter } = useContext(PatientContext);


    useEffect(() => {
        error ? setTemplate(error) : setTemplate(data)
    }, [error, data])

    const deletePatient = () => {
        deleter(data.id)

    }

    return (
        <div className="container row mt-3">
            <SearchBar
                onSubmit={handleSearch}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter ID to search "
            />

            <section>
                <h3 className="text-center mt-4">Patient Info</h3>
                {template}

                <div className={`col-md-12 ${!Object.keys(data).length && "d-none"}`}>
                    <ButtonDanger text="Delete Patient" className="col-md-4" onClick={deletePatient} />
                    <Link to={`/main/patient/update_form/${query}`}><ButtonSecondary text="Update Patient" className="col-md-4 offset-md-4" /></Link>
                </div>
            </section>

            <ToastContainer />
        </div>
    )
}

export default PatientSearchResult
