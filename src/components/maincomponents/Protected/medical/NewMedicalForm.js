import React, {useState, useEffect} from 'react'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary'
import { useFetch } from '../../../../utils/CustomHooks'
import Form from '../../../minorcomponents/Form'
import InputText from '../../../minorcomponents/InputText'
import Select from '../../../minorcomponents/Select'
import Textarea from '../../../minorcomponents/Textarea'
import SmallInput from '../../../minorcomponents/SmallInput'
// import {TrashFill} from 'react-bootstrap-icons'
import {ISOTIME} from '../../../../store/GlobalConstants'
 import { ToastContainer } from 'react-toastify'

 const NewMedicalForm = () => {

        const { post,setUrl } = useFetch()
        const {get, data : patientData, setData: setPatientData} = useFetch('/patients')
        const [selectMedical, setSelectMedical] = useState('')
        const [patientId, setPatientId] = useState('')
        const [illnesses, setIllnesses] = useState({
            date_created: ISOTIME(),
            description: "",
            id:0,
            title: ""
        })
        const [medications, setMedications] = useState({
            date_created: ISOTIME(),
            description: "",
            id:0,
            title: ""
        })
         const [surgery, setSurgery] = useState({
            date_created: ISOTIME(),
            description: "",
            title: ""
        })
        useEffect(() => {
            setPatientId('')
        }, [selectMedical])
        
        useEffect(() => {
             selectMedical === 'surgery' 
            ? setUrl(`/${selectMedical}/${patientData.id}`) 
            : setUrl(`/medical/${selectMedical}/${patientData.id}`)
        }, [selectMedical, patientData])


         const handleSubmit = ( e , body) => {
            e.preventDefault();
            post(body)
        }
        const handleChange = (e, setter, obj) => {
            const {name, value} = e.target;
            setter({...obj, [name] : value})
        
        }

    return (
        <div>
        <Select name="selectResource" onChange={(e) => {setSelectMedical(e.target.value)}} value={selectMedical} > 
                <option value="">Select a Medical type </option>
                <option value="illnessesinfo">Add a new Illness Information</option>
                <option value="medications">Add a new Medication</option>
                <option value="surgery">Add a new Surgery Info</option>
        </Select>
        {selectMedical &&
          <SmallInput 
        label="Patient ID" 
        name="patientId" 
        value={patientId}
        onChange={e => {setPatientId(e.target.value)}}
        onBlur={e => {
            get(patientId)
        }}
        formText={Object.entries(patientData).length !== 0 && 'Patient Found'}
        /> }
        {selectMedical === 'illnessesinfo' &&
        <>
            <Form onSubmit={e => {handleSubmit(e, illnesses)}}>
                     <InputText name="title" value={illnesses.title} label="Title" onChange={e => {handleChange(e, setIllnesses, illnesses)}}/>
                     <Textarea name="description" value={illnesses.description} label="Description" onChange={e => {handleChange(e, setIllnesses, illnesses)}}/>
                     <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />          
            </Form>
        </>
        }
        {selectMedical === 'medications' &&
        <>
            <Form onSubmit={e => {handleSubmit(e, medications)}}>
                     <InputText name="title" value={medications.title} label="Title" onChange={e => {handleChange(e, setMedications, medications)}}/>
                     <Textarea name="description" value={medications.description} label="Description" onChange={e => {handleChange(e, setMedications, medications)}}/>
                     <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />          
            </Form>
        </>
        }
        {selectMedical === 'surgery' &&
        <>
      
            <Form onSubmit={e => {handleSubmit(e, surgery)}}>
                     <InputText name="title" value={surgery.title} label="Title" onChange={e => {handleChange(e, setSurgery, surgery)}}/>
                     <Textarea name="description" value={surgery.description} label="Description" onChange={e => {handleChange(e, setSurgery, surgery)}}/>
                     <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />          
            </Form>
        </>
        }

        <ToastContainer />
        </div>
    )
 }

 export default NewMedicalForm


// Component Befor API change : to be removed when work is complete

// const NewMedicalForm = () => {
//     let url = `/medical`

//     const { post,setUrl } = useFetch()
//     const [selectMedical, setSelectMedical] = useState('')
//     const [illnesses, setIllnesses] = useState({
//         date_created: ISOTIME(),
//         description: "",
//         title: ""
//     })
//     const [medications, setMedications] = useState({
//         date_created: ISOTIME(),
//         description: "",
//         medicines: [],
//         title: ""
//     })
//     const [medicines, setMedicines] = useState({
//         instruction: "",
//         name: ""
//     })
//     const [surgeryInfo, setSurgeryInfo] = useState({
//         date_created: ISOTIME(),
//         description: "",
//         title: ""
//     })
    
//     const handleSubmit = ( e , body) => {
//         e.preventDefault();
//         post(body)
//     }
//     const handleChange = (e, setter, obj) => {
//         const {name, value} = e.target;
//         setter({...obj, [name] : value})
       
//     }

//     useEffect(() => {
//         setUrl(`${url}/${selectMedical}`)
//     }, [selectMedical])
     
//   const medicineFieldChange = (index, event) => {
//     const {name, value} = event.target
//     let medicinelist = [...medications.medicines]
//     medicinelist[index][name] = value
//     setMedications({...medications, medicines: medicinelist})
//   }

//   const addMedicine = () => {
//     let medicinelist = [...medications.medicines,  {instruction: '', name: ''}]
//     setMedications({...medications, medicines: medicinelist})
//   }

//   const deleteMedicine = (index) => {
//     let list = [...medications.medicines];
//     list.splice(index, 1);
//     setMedications({...medications, medicines: list});
//     console.log(list)
//   }
//     return (
//     <div>
//         <Select name="selectResource" onChange={(e) => {setSelectMedical(e.target.value)}} value={selectMedical} > 
//             <option value="">Select a Medical type </option>
//             <option value="illnessesinfo">Add a new Illness Information</option>
//             <option value="medications">Add a new Medication</option>
//             <option value="medicines">Add a new Medicine</option>
//             <option value="surgeryInfo">Add a new Surgery Info</option>
//             </Select>
//             {selectMedical === 'illnessesinfo' &&
//             <Form onSubmit={e => {handleSubmit(e, illnesses)}}>
//                 <InputText name="title" value={illnesses.title} label="Title" onChange={e => {handleChange(e, setIllnesses, illnesses)}}/>
//                 <Textarea name="description" value={illnesses.description} label="Description" onChange={e => {handleChange(e, setIllnesses, illnesses)}}/>
//                 <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />          
//             </Form>}
//             {selectMedical === 'medications' &&
//              <Form onSubmit={e => {handleSubmit(e, medications)}}>
//              <InputText name="title" value={medications.title} label="Title" onChange={e => {handleChange(e, setMedications, medications)}}/>
//              <Textarea name="description" value={medications.description} label="Description" onChange={e => {handleChange(e, setMedications, medications)}}/>
//              <ButtonPrimary text="Add a Medicine" type="button"  onClick={addMedicine} />
//              {medications.medicines.map((medicine, index) => {
//                 return ( <div className="row position-relative" key={index}>
//                 <InputText label="Name" name="name" placeholder={index} value={medicine.name} onChange={event => { medicineFieldChange(index, event)}}/>
//                 <InputText label="Instruction" name="instruction" value={medicine.instruction} onChange={event => { medicineFieldChange(index, event)}}/>
//                 <ButtonPrimary type="button" text={<TrashFill/>} onClick={() => deleteMedicine(index)} className="position-absolute start-100 top-50 p-0"/>
//                 </div>)
//                 })}
//                 <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />
//          </Form>}
//             {selectMedical === 'medicines' &&
//              <Form onSubmit={e => {handleSubmit(e, medicines)}}>
//              <InputText name="name" value={medicines.name} label="name" onChange={e => {handleChange(e, setMedicines, medicines)}}/>
//              <Textarea name="instruction" value={medicines.instruction} label="instruction" onChange={e => {handleChange(e, setMedicines, medicines)}}/>
//              <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />
//          </Form>}
//             {selectMedical === 'surgeryInfo' &&
//              <Form onSubmit={e => {handleSubmit(e, surgeryInfo)}}>
//              <InputText name="title" value={surgeryInfo.title} label="Title" onChange={e => {handleChange(e, setSurgeryInfo, surgeryInfo)}}/>
//              <Textarea name="description" value={surgeryInfo.description} label="Description" onChange={e => {handleChange(e, setSurgeryInfo, surgeryInfo)}}/>
//              <ButtonPrimary text="Submit" type="submit" className="offset-md-10" />
//          </Form>}
//          <ToastContainer />
//     </div>
//     )
// }


// export default NewMedicalForm
