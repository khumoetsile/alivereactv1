import React from 'react';
import {Route} from 'react-router-dom'
import Paper from '../../../minorcomponents/Paper';
import Title from '../../../minorcomponents/Title';
import ChoiceBar from '../../../minorcomponents/ChoiceBar';
import MedicalSearchResult from './MedicalSearchResult';
import NewMedicalForm from './NewMedicalForm'

const Medical = () => {

  return (
    <Paper>
      <Title text="Medical"/>
      <ChoiceBar text1="Add a New Medicals" 
      text2="Search Existing Medicals" 
      link1="/main/medical/" 
      link2="/main/medical/search/"/>
      <Route path="/main/medical/" exact component={NewMedicalForm} />                                                                                                                                                                                                                                                          
      <Route path="/main/medical/search/" component={MedicalSearchResult} />                                                                                                                                                                                                                                                             </Paper>
  );
};



export default Medical;