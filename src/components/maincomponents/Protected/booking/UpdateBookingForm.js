import React, {useContext, useState} from 'react'
import _ from 'lodash';
import Form from "../../../minorcomponents/Form";
import InputText from '../../../minorcomponents/InputText'
import InputVariable from '../../../minorcomponents/InputVariable'
import SmallInput from '../../../minorcomponents/SmallInput'
import Textarea from '../../../minorcomponents/Textarea'
import Select from '../../../minorcomponents/Select'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary';
import {useFetch} from '../../../../utils/CustomHooks'
import { ToastContainer } from 'react-toastify';
// import FileUpload from '../../../minorcomponents/FileUpload'
import {BookingContext} from '../../../../utils/BookingContext'
import {DoctorList} from '../../../../store/GlobalConstants'

const UpdateBookingForm = () => {
    const {data} = useContext(BookingContext)
     const {put} = useFetch(`/bookings/${data.id}`)
    const [ bookingState, setBookingState ] = useState(data)
        
   

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setBookingState( { ...bookingState, [ name ]: value } ) 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        put( bookingState )
    }

    // const handleDrop = (files) => {
    //     let filelist = [...bookingState.uploadedDocumentInfo, ...files]
    //     setBookingState({...bookingState, uploadedDocumentInfo: filelist})
    // }

    return (
    <div className="container mt-5">
        {/* Booking form */}
        <Form onSubmit={handleSubmit}>
      <Select label="Choose an available Doctor" name="doctor" value={bookingState.doctor} onChange={handleChange}>
            <option value="">Select a doctor</option>
        {DoctorList.map(doctor => (
            <option value={doctor.name} key={doctor.name}>{_.startCase(doctor.name)}</option>
        ))}        
        </Select>
        <InputText label="Booking Reference" name="bookingRef" value={bookingState.bookingRef} onChange={handleChange}/>
        <InputText label="Clinic" name="clinic" value={bookingState.clinic} onChange={handleChange}/>
        <InputVariable label="Appointment Date" type="date" name="dateBooked" value={bookingState.dateBooked} onChange={handleChange}/>
        <SmallInput type="time" label="Time Slot" name="timeSlot" value={bookingState.timeSlot}  onChange={handleChange}/>
        <SmallInput type="text" label="Height" name="height" value={bookingState.height} onChange={handleChange}/>
        <SmallInput type="text" label="weight" name="weight" value={bookingState.weight} onChange={handleChange}/>
        <SmallInput type="text" label="Blood Pressure" name="bloodPressure" value={bookingState.bloodPressure} onChange={handleChange}/>
        <SmallInput type="text" label="Oxygen Saturation" name="oxygenSaturation" value={bookingState.oxygenSaturation} onChange={handleChange}/>
        <SmallInput type="text" label="Pulse Reading" name="pulseReading" value={bookingState.pulseReading} onChange={handleChange}/>
        <SmallInput type="text" label="Temperature" name="temp" value={bookingState.temp} onChange={handleChange}/>
        <Textarea label="Current Complaints" name="current_complaints" value={bookingState.current_complaints} onChange={handleChange}/>
        {/* <FileUpload handleDrop={handleDrop} files={bookingState.uploadedDocumentInfo} multiple/> */}
        <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />
        <ToastContainer />
    </Form>
    
</div>
    )
}

export default UpdateBookingForm
