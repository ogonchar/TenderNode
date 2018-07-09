import React, { Component } from 'react'
import moment from 'moment';
import onClickOutside from "react-onclickoutside";

import Button from '../HocAndTemplates/Button.js'
import CalendarNav from './parts/CalendarNav.js'
import CalendarBody from './parts/CalendarBody.js'
import { colorText} from './parts/ColorText.js'
import { DANGER } from '../../const.js'
import AnimateHeight from 'react-animate-height';


/* 
  * The class is responsible for calendar
*/

class Calendar extends Component {

  /* 
    * Date is just today 
    * colorDates is a map for change color of dates with events 
    * texts are aaray for text in dates with events 
    * height required for sliding down when mounting
  */

  state = {
    date: moment(new Date()),
    height: 0,
    remindersFromDB: [],
    reminder: {
      show: false, 
      date: ''
    },
    reminders: []
  }

  closeReminder() {
    this.setState({
        reminder: {
            show: false, 
            date: ''
        }
    })
  }
  //hiding when click outside modal window
  handleClickOutside = event => {
    this.props.toggleSmf('showCalendar')
  }

  componentWillMount() {
    //necessery for sliding down effect
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
    //calling external function for colors and texts for dates
    fetch('/api/reminders/read')
    .then(res => res.json())
    .then(json => {
      this.setState({
        remindersFromDB: json
    })
      let month = colorText(this.state.date, this.props.tenders, json)
      this.setState({
        month: month
      })
    })
  }

  // change rendering month 
  monthChange(direction, date) {
    direction === 'left' ?
      date = moment(this.state.date).subtract(1, 'month')
      :
      date = moment(this.state.date).add(1, 'month')
    //calling external function for receiving maps of colors and texts for dates
    let month = colorText(date, this.props.tenders, this.state.remindersFromDB)
    this.setState({
      date, month
    })
  }

  dayClick = (date) => {
    this.setState({
      reminder: {
        show: !this.state.reminder.show, 
        date: moment(date._d)
      }
    })
  }

  render() {
    //rendering divider on head with navigation and body 
    //calling external function for receiving maps of colors and texts for dates
    let month = this.state.month

    return (
      <AnimateHeight
        duration={500}
        height={this.state.height}
      >
        <div key={'1'}>
        {//Checking if data already fetched for getting current month name
          month ?
            (<CalendarNav
              month={moment(month[20]).format('MMMM YYYY')}
              change={(dir) => this.monthChange(dir)}
            />) 
          : null
        }
        <CalendarBody
          month={this.state.month}
          dayClick={(date) => this.dayClick(date)}
          reminder = {this.state.reminder}
          close= {() => this.closeReminder()}
        />
        <Button
          onClick={() => this.props.toggleSmf('showCalendar')}
          color={DANGER}
          name='Close'
        />
        </div>
      </AnimateHeight>
    )
  }
}
//necessery for hiding unmount when click outside the window
export default onClickOutside(Calendar)