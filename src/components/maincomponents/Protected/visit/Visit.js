import React from 'react';
import { Route } from 'react-router-dom';
import VisitSearchResult from './VisitSearchResult'
import Paper from '../../../minorcomponents/Paper';
import Title from '../../../minorcomponents/Title';
import NothingHere from '../../../minorcomponents/NothingHere';
import NewVisitForm from './NewVisitForm'
import ChoiceBar from '../../../minorcomponents/ChoiceBar';

const Visit = () => {
  return (
    <Paper>
      <Title text="Visit" />
     <ChoiceBar 
     text1="Record Visit"
     text2="Search Visit Records"
     link1="/main/visit/"
     link2="/main/visit/search_result"
     />
      <Route path="/main/visit/" exact component={NewVisitForm}/>
      <Route path="/main/visit/search_result" exact component={VisitSearchResult}/>
    </Paper>
  );
};



export default Visit;
