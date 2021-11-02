import React, { useState, useEffect } from 'react'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary'
import { useFetch } from '../../../../utils/CustomHooks'
import Form from '../../../minorcomponents/Form'
import InputText from '../../../minorcomponents/InputText'
import Select from '../../../minorcomponents/Select'
import Textarea from '../../../minorcomponents/Textarea'
import InputVariable from '../../../minorcomponents/InputVariable'
import { ToastContainer } from 'react-toastify'

const initialState = {
    address: '',
    avatar: '',
    dob: '',
    email: '',
    firstname: '',
    gender: '',
    id: 0,
    idNumber: '',
    lastname: '',
    maritalStatus: '',
    mobile: '',
    occupation: '',
    title: '',
}

const NewPatientForm = () => {

    const { post, data } = useFetch(`/patients`);
    const [patientState, setPatientState] = useState(initialState)

    useEffect(() => {
        Object.keys(data).length !== 0 && setPatientState(initialState)
    }, [data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientState({ ...patientState, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        post(patientState);

    }

    return (
        <div className="container mt-3">
            <Form onSubmit={handleSubmit}>
                <div className="col-md-4 offset-md-4 text-center mt-5">
                    <label className="form-label">Avatar</label>
                    <div>
                        <img src={'https://via.placeholder.com/150'} className="img-responsive border-1 border-grey rounded-circle mb-2" width="150px" height="150px" alt="patient" />

                    </div>
                    <InputVariable
                        type="file"
                        value={patientState.avatar}
                        name="avatar"
                        onChange={handleChange}
                    />

                </div>

                <InputText
                    label="Patient ID"
                    value={patientState.idNumber}
                    name="idNumber"
                    onChange={handleChange}
                    formText="This should be unique to every patient. It will be used for patient search" required />

                <Select
                    label="Title"
                    name="title"
                    value={patientState.title}
                    onChange={handleChange} required>
                    <option value="">Mr/Mrs/Miss</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </Select>

                <InputText
                    label="First Name"
                    value={patientState.firstname}
                    name="firstname"
                    onChange={handleChange} required />

                <InputText
                    label="Last Name"
                    value={patientState.lastname}
                    name="lastname"
                    onChange={handleChange} required />

                <Select
                    label="Gender"
                    name="gender"
                    value={patientState.gender}
                    onChange={handleChange} required>
                    <option value="">Male/Female</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>

                <InputVariable
                    type="date"
                    label="Date of Birth"
                    value={patientState.dob}
                    name="dob"
                    onChange={handleChange} required />

                <Select
                    label="Marital Status"
                    name="maritalStatus"
                    value={patientState.maritalStatus}
                    onChange={handleChange} required>
                    <option value="">Choose marital status</option>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                    <option value="divorced">Divorced</option>
                    <option value="widow">Widow</option>
                    <option value="widower">Widower</option>
                </Select>

                <InputText
                    label="Occupation"
                    value={patientState.occupation}
                    name="occupation"
                    onChange={handleChange} />

                <InputVariable
                    label="Phone Number"
                    type="tel"
                    value={patientState.mobile}
                    name="mobile"
                    onChange={handleChange} />

                <InputVariable
                    label="Email"
                    type="email"
                    value={patientState.email}
                    name="email"
                    onChange={handleChange} />

                <Textarea
                    label="Address"
                    value={patientState.address}
                    name="address"
                    onChange={handleChange} required />

                <ButtonPrimary
                    text="Submit"
                    type="submit"
                    className="offset-md-10" />

            </Form>
            <ToastContainer />

        </div>
    )
}
export default NewPatientForm
