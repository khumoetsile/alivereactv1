import React from 'react'
import Paper from '../../../minorcomponents/Paper'
import { Route } from 'react-router-dom'
import ChoiceBar from '../../../minorcomponents/ChoiceBar'
import Title from '../../../minorcomponents/Title'
import BookingSearchResult from './BookingSearchResult'
import BookingForm from './BookingForm'
import UpdateBookingForm from './UpdateBookingForm'


const Booking = () => {
  return (
    <Paper >
      <Title text="Booking" />
      <ChoiceBar text1="Book a Visit"
        text2="Search Bookings"
        link1="/main/booking/"
        link2="/main/booking/search/" />
      <Route path="/main/booking/" exact component={BookingForm} />
      <Route path="/main/booking/search/" component={BookingSearchResult} />
      <Route path="/main/booking/update_form/:id" component={UpdateBookingForm} />
    </Paper>
  )
}

export default Booking;
