import React, {useState, useEffect} from 'react'
import ButtonPrimary from '../../../minorcomponents/ButtonPrimary'
import { useFetch } from '../../../../utils/CustomHooks'
import Form from '../../../minorcomponents/Form'
import InputText from '../../../minorcomponents/InputText'
import Select from '../../../minorcomponents/Select'
import Textarea from '../../../minorcomponents/Textarea'
import {ToastContainer} from 'react-toastify'



const NewResourceForm = () => {
    let url = `/resources`
       
    const { post, setUrl } = useFetch()
    const [selectResource, setSelectResource] = useState('');
    const [clinic, setClinic] = useState( {
        name: '',
        code: '',
        address: '',
        contact: ''
    })
    const [country, setCountry] = useState({
        name:'',
        code: '',
        iso3: '',
        callingCode: ''
    })
    const  [other, setOther] = useState({
        name:'',
        code: ''
    })   
   
    useEffect(() => {
        setUrl(`${url}/${selectResource}`);
    }, [selectResource])
 
    const handleSubmit = ( e , body) => {
        e.preventDefault();
         post(body)
        console.log(body)
    }

    const handleChange = (e, setter, obj) => {
        const {name, value} = e.target;
        setter({...obj, [name] : value})
    }
    const handleSelect = (e) => {
        setSelectResource(e.target.value)
    }


    return (
        <div className="">
            <Select name="selectResource"  value={selectResource} onChange={handleSelect} > 
            <option value="">Select a Resource type </option>
            <option value="clinics">Add a new clinic</option>
            <option value="country">Add a new country</option>
            <option value="relationship-types">Add a new relationship type</option>
            <option value="document-types">Add a new document type</option>
            <option value="titles">Add a new title</option>
            </Select>

            {/* clinic Search form */}
           { selectResource === "clinics" &&
           <Form onSubmit={e => {handleSubmit(e, clinic)}}>
           <InputText name="name" value={clinic.name} onChange={e => {handleChange(e, setClinic, clinic)}} label="Name"/>
           <InputText name="code" value={clinic.code} onChange={e => {handleChange(e, setClinic, clinic)}} label="Code"/>
           <InputText name="contact" value={clinic.contact} onChange={e => {handleChange(e, setClinic, clinic)}} label="Contact"/>
           <Textarea name="address" value={clinic.address} onChange={e => {handleChange(e, setClinic, clinic)}}  label="Address"/>
           <ButtonPrimary type="submit" text="Submit"/>
            </Form>}
            {selectResource === "country" &&
            <Form onSubmit={e => {handleSubmit(e, country)}}> 
            <InputText name="name" value={country.name} onChange={e => {handleChange(e, setCountry, country)}} label="Name"/>
            <InputText name="code" value={country.code} onChange={e => {handleChange(e, setCountry, country)}} label="Code"/>
            <InputText name="iso3" value={country.iso3} onChange={e => {handleChange(e, setCountry, country)}} label="ISO3"/>
            <Textarea name="callingCode" value={country.callingCode} onChange={e => {handleChange(e, setCountry, country)}}  label="Calling Code"/>
            <ButtonPrimary type="submit" text="Submit"/>
             </Form>
            }  
                 {selectResource &&  selectResource !== "clinics" && selectResource !== "country" &&
            <Form onSubmit={e => {handleSubmit(e, other)}}> 
            <InputText name="name" value={other.name} onChange={e => {handleChange(e, setOther, other)}} label="Name"/>
            <InputText name="code" value={other.code} onChange={e => {handleChange(e, setOther, other)}} label="Code"/>
            <ButtonPrimary type="submit" text="Submit"/>
             </Form>
            }
           <ToastContainer />
        </div>
    )
}
export default NewResourceForm
