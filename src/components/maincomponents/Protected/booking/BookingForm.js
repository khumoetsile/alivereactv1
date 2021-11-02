import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import Form from "../../../minorcomponents/Form";
import InputText from '../../../minorcomponents/InputText'
import InputVariable from '../../../minorcomponents/InputVariable'
import SmallInput from '../../../minorcomponents/SmallInput'
import Textarea from '../../../minorcomponents/Textarea'
import Select from '../../../minorcomponents/Select'
import Fieldset from '../../../minorcomponents/Fieldset'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary';
import { useFetch } from '../../../../utils/CustomHooks'
import { ToastContainer } from 'react-toastify';
// import FileUpload from '../../../minorcomponents/FileUpload'
import { DoctorList } from '../../../../store/GlobalConstants'

const initialState = {
    bloodPressure: '',
    bookingRef: '',
    clinic: '',
    current_complaints: '',
    dateBooked: '',
    doctor: '',
    id: 0,
    height: '',
    oxygenSaturation: '',
    pulseReading: '',
    temp: '',
    timeSlot: '',
    uploadedDocumentInfo: [],
    weight: '',
}

const BookingForm = () => {
    const [patientInfo, setPatientInfo] = useState('')
    const { get, data: patientData, setData: setPatientData } = useFetch(`/patients`)
    const [bookingState, setBookingState] = useState(initialState)
    const { post, setUrl } = useFetch()

    useEffect(() => {
        patientData.hasOwnProperty('id') &&
            setUrl(`/bookings/${patientData.id}`)
    }, [patientData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingState({ ...bookingState, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(bookingState)
    }

    // const handleDrop = (files) => {
    //     let filelist = [...bookingState.uploadedDocumentInfo, ...files]
    //     setBookingState({...bookingState, uploadedDocumentInfo: filelist})
    // }

    return (
        <div className="container mt-5">

            {/* Get the patient info */}
            <SmallInput
                label="Patient ID"
                name="patientId"
                onChange={e => { setPatientInfo(e.target.value) }}
                onBlur={e => {
                    setPatientData({})
                    get(patientInfo)
                }}
                formText={Object.entries(patientData).length !== 0 && 'Patient Found'}
            />

            {/* Booking form */}
            <Form onSubmit={handleSubmit}>
                <Fieldset disabled={Object.entries(patientData).length === 0 && true}>
                    <Select label="Choose an available Doctor" name="doctor" value={bookingState.doctor} onChange={handleChange}>
                        <option value="">Select a doctor</option>
                        {DoctorList.map(doctor => (
                            <option value={doctor.name} key={doctor.name}>{_.startCase(doctor.name)}</option>
                        ))}
                    </Select>
                    <InputText label="Booking Reference" name="bookingRef" value={bookingState.bookingRef} onChange={handleChange} />
                    <InputText label="Clinic" name="clinic" value={bookingState.clinic} onChange={handleChange} />
                    <InputVariable label="Appointment Date" type="date" name="dateBooked" value={bookingState.dateBooked} onChange={handleChange} />
                    <SmallInput type="time" label="Time Slot" name="timeSlot" value={bookingState.timeSlot} onChange={handleChange} placeholder="18:00 AM" />
                    <SmallInput type="text" label="Height" name="height" value={bookingState.height} onChange={handleChange} />
                    <SmallInput type="text" label="weight" name="weight" value={bookingState.weight} onChange={handleChange} />
                    <SmallInput type="text" label="Blood Pressure" name="bloodPressure" value={bookingState.bloodPressure} onChange={handleChange} />
                    <SmallInput type="text" label="Oxygen Saturation" name="oxygenSaturation" value={bookingState.oxygenSaturation} onChange={handleChange} />
                    <SmallInput type="text" label="Pulse Reading" name="pulseReading" value={bookingState.pulseReading} onChange={handleChange} />
                    <SmallInput type="text" label="Temperature" name="temp" value={bookingState.temp} onChange={handleChange} />
                    <Textarea label="Current Complaints" name="current_complaints" value={bookingState.current_complaints} onChange={handleChange} />
                    {/* <FileUpload handleDrop={handleDrop} files={bookingState.uploadedDocumentInfo} multiple/> */}
                    <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />
                </Fieldset>
                <ToastContainer />
            </Form>

        </div>
    )
}

export default BookingForm
