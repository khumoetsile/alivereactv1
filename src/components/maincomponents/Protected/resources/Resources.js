import React from 'react'
import Paper from '../../../minorcomponents/Paper'
import { Route } from 'react-router-dom'
import ResourcesSearchResult from './ResourcesSearchResult'
import NewResourceForm from './NewResourceForm'
import ChoiceBar from '../../../minorcomponents/ChoiceBar'
import Title from '../../../minorcomponents/Title'

const Resources = () => {
  return (
    <Paper >
      <Title text="Resources"/>
      <ChoiceBar text1="Add a New Resource" 
      text2="Search Existing Resources" 
      link1="/main/resources/" 
      link2="/main/resources/search/" />
      <Route path="/main/resources/" exact component={NewResourceForm }/>
      <Route path="/main/resources/search/" component={ResourcesSearchResult }/>
    </Paper>
  )
}

export default Resources
