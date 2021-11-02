import React from 'react'
import Paper from '../../../minorcomponents/Paper'
import { Route } from 'react-router-dom'
import PatientSearchResult from './PatientSearchResult'
import NewPatientForm from './NewPatientForm'
import UpdatePatientForm from './UpdatePatientForm'
import ChoiceBar from '../../../minorcomponents/ChoiceBar'
import Title from '../../../minorcomponents/Title'

const Patient = () => {
  return (
    <Paper >
      <Title text="Patient"/>
      <ChoiceBar text1="Add New Patient" 
      text2="Search Existing Patient" 
      link1="/main/patient/" 
      link2="/main/patient/search/" />
      <Route path="/main/patient/" exact component={NewPatientForm}/>
      <Route path="/main/patient/search/" component={PatientSearchResult}/>
      <Route path="/main/patient/update_form/:id" component={UpdatePatientForm}/>
    </Paper>
  )
}

export default Patient
