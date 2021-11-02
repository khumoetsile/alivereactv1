import React, { useEffect, useContext } from 'react'
import { useTemplateCreator} from '../../../../utils/CustomHooks';
import SearchBar from '../../../minorcomponents/Search';
import { ToastContainer } from 'react-toastify';
import { BookingContext } from '../../../../utils/BookingContext'
import { Link } from 'react-router-dom'
import ButtonDanger from '../../../minorcomponents/ButtonDanger';
import ButtonSecondary from '../../../minorcomponents/ButtonSecondary'

const VisitSearchResult = () => {
    const { data, error, handleSearch, query, setQuery, deleter } = useContext(BookingContext)
    //const {deleter} = useFetch(`/bookings`)
    const [template, setTemplate] = useTemplateCreator()



    useEffect(() => {
        error ? setTemplate(error) : setTemplate(data)
    }, [error, data])

    const deleteBooking = () => {
        deleter(data.id)
    }
    return (
        <section className="container mt-3">
            <SearchBar
                onSubmit={handleSearch}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter ID to search "
            />
            <div className={`col-md-12 ${!Object.keys(data).length && "d-none"}`}>
                <h3 className="text-center mt-4">Booking Info</h3>
                {template}

                <ButtonDanger text="Delete Booking" className="col-md-4" onClick={deleteBooking} />
                <Link to={`/main/booking/update_form/${query}`}><ButtonSecondary text="Update Booking" className="col-md-4 offset-md-4" /></Link>
            </div>
            <ToastContainer />
        </section>
    )
}

export default VisitSearchResult
