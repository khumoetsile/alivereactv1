import React, {useState, useEffect} from 'react'
import _ from 'lodash';
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary';
import { useFetch } from '../../../../utils/CustomHooks';
import InputText from '../../../minorcomponents/InputText';
import Form from '../../../minorcomponents/Form';
import Textarea from  '../../../minorcomponents/Textarea'
import Select from  '../../../minorcomponents/Select'
// import { TrashFill } from 'react-bootstrap-icons';
import {ISOTIME} from '../../../../store/GlobalConstants'
import SmallInput from '../../../minorcomponents/SmallInput';
import {ToastContainer} from 'react-toastify'
import {DoctorList} from '../../../../store/GlobalConstants'
import Fieldset from '../../../minorcomponents/Fieldset'

 const NewVisitForm = () => {
    const {post, setUrl} = useFetch()
    const {get, data : bookingData} = useFetch('/bookings')
    const [bookingRef, setBookingRef] = useState('') 
    const [visitState, setVisitState] = useState({
        "date_opened": ISOTIME(),
        "diagnosis": "",
        "doctor": "",
        "doctorRecommendation": "",
        "id": 0,
        "technician": ""
      })

useEffect(() => {
  Object.keys(bookingData).length !== 0 
  &&  setUrl(`/visits/${bookingData.id}`)
},[bookingData])

    const handleChange = (e) => {
      const {name, value} = e.target
      setVisitState({...visitState, [name]: value})  
      }

     const handleSubmit = (e) =>{
       e.preventDefault()
       post(visitState)
      }


       return (
      <div className="pt-5">
           <SmallInput 
        label="Booking Ref" 
        name="bookingRef" 
        value={bookingRef}
        onChange={e => {setBookingRef(e.target.value)}}
        onBlur={e => {   
            get(bookingRef)
        }}
        formText={Object.entries(bookingData).length !== 0 && 'Patient Found'}
        />
        <Form onSubmit={handleSubmit}>
          <Fieldset disabled={Object.entries(bookingData).length === 0 && true}>
            <Select label="Doctor" name="doctor" value={visitState.doctor} onChange={handleChange}>
                  <option value="">Select a doctor</option>
              {DoctorList.map(doctor => (
                  <option value={doctor.name} key={doctor.name}>{_.startCase(doctor.name)}</option>
              ))}        
              </Select>
            <InputText label="Technician" name="technician" onChange={handleChange} value={visitState.technician}/>
            <InputText label="Diagnosis" name="diagnosis" onChange={handleChange} value={visitState.diagnosis} />
            <Textarea label="Doctors Recommendation" name="doctorRecommendation" onChange={handleChange} value={visitState.doctorRecommendation} /> 
          <ButtonPrimary type="submit" text="Submit" className="offset-md-10"/>
          </Fieldset>
      </Form>
     <ToastContainer />
      </div>
    )
 }

export default NewVisitForm







// Old API spc form including medecines dynamic form field --> 


// const NewVisitForm = () => {
//     const {get, data : bookingData, error: bookingError, setError: setBoookingError} = useFetch(`/bookings`)
//     const {post, data} = useFetch(`/visits`)
//     const [visitState, setVisitState] = useState({
//       doctor: '',
//       technician: '',
//       diagnosis: '',
//       date_opened: '',
//       doctorRecommendation: '',
//       title: '',
//       description: '',
//         medicines: [],
//       })
  
//     const [bookingRef, setBookingRef] = useState('')
    
//     const medicineFieldChange = (index, event) => {
//       const {name, value} = event.target
//       let medicinelist = [...visitState.medicines]
//       medicinelist[index][name] = value
//       setVisitState({...visitState, medicines : medicinelist})
  
//     }
  
//     const addMedicine = () => {
//       let medicinelist = [...visitState.medicines,  {instruction: '', name: ''}]
//       setVisitState({...visitState, medicines: medicinelist})
//     }
  
//     const deleteMedicine = (index) => {
//       let list = [...visitState.medicines];
//       list.splice(index, 1);
//       setVisitState({...visitState, medicines : list});
     
//     }
  
//   const handleChange = (e) => {
//     const {name, value} = e.target
//     setVisitState({...visitState, [name]: value})  
   
//     }
  
//     const handleSubmit = (e) =>{
//       e.preventDefault()
//       const {title, description, medicines, ...visitFormData} = visitState;
//           visitFormData.prescription = 
//            {
//               title: title,
//               description: description,
//               date_created: ISOTIME(),
//               medicines: medicines
//             }
//             visitFormData.booking = {...bookingData}

//       post(visitFormData);
//       console.log(visitFormData)
//     }
//     return (
//       <div className="pt-5">
//          <SmallInput 
//         label="Booking Ref" 
//         name="bookingRef" 
//         value={bookingRef}
//          onBlur={e => {get(bookingRef)}} 
//          formText={ Object.entries(data).length > 0 && 'Booking Found'}
//          onChange={e => {
//           setBookingRef(e.target.value);
//           setBoookingError('')
//           }} />
//         <Form onSubmit={handleSubmit}>
//      <InputText label="Doctor" name="doctor" onChange={handleChange} value={visitState.doctor}/>
//       <InputText label="Technician" name="technician" onChange={handleChange} value={visitState.technician}/>
//       <InputText label="Diagnosis" name="diagnosis" onChange={handleChange} value={visitState.diagnosis} />
//       <Textarea label="Doctors Recommendation" name="doctorRecommendation" onChange={handleChange} value={visitState.doctorRecommendation} />
//       <fieldset className="row">
//         <legend>Prescriptions</legend>
//       <InputText label="Title" name="title" onChange={handleChange} value={visitState.title}/>
//       <Textarea label="Description" name="description" onChange={handleChange} value={visitState.description} />
  
//       <h5>Medicines</h5>  <ButtonPrimary text="Add a Medicine" type="button"  onClick={addMedicine} />
//         {visitState.medicines.map((medicine, index) => {
//        return ( <div className="row position-relative" key={index}>
//         <InputText label="Name" name="name" placeholder={index} value={medicine.name} onChange={event => { medicineFieldChange(index, event)}}/>
//         <InputText label="Instruction" name="instruction" value={medicine.instruction} onChange={event => { medicineFieldChange(index, event)}}/>
//          <ButtonPrimary type="button" text={<TrashFill/>} onClick={() => deleteMedicine(index)} className="position-absolute start-100 top-50 p-0"/>
//         </div>)
//       })}  

//     </fieldset>
//     <ButtonPrimary type="submit" text="Submit" className="offset-md-10"/>
//       </Form>
//      <ToastContainer />
//       </div>
//     )
//   }
  
// export default NewVisitForm

