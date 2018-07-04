import React, {Component} from 'react'
import moment from 'moment';
import onClickOutside from "react-onclickoutside";

import Button from '../Hoc/Button.js'
import CalendarNav from './CalendarNav.js'
import CalendarBody from './CalendarBody.js'
import {colorMap} from './Functions.js'
import {DANGER}  from '../../const.js'
import AnimateHeight from 'react-animate-height';

class Calendar extends Component{
  state = {
    date: moment(new Date()),
    colorDates: new Map(),
    tenders: [],
    texts: new Map(),
    height: 0,
  }

   handleClickOutside = event => { 
    this.props.toggleSmf('showCalendar')
  }

  getMonth = (date) => {
    let month = []
    let fday = moment(date).startOf('month').subtract(1, 'days').startOf('week')
    for (let i = 0; i < 42; i++){
        fday.add(1, 'days')
        month[i] = (moment(fday))
    }
    return month
    }

  componentDidMount()  {
    this.setState({
      height: this.state.height === 0 ? 'auto' : 0,
    });
    let texts = new Map();
      let month = this.getMonth(this.state.date)
      let colorText = colorMap(month, this.props.tenders)
      this.setState({
        colorDates: colorText.colorDates,
        texts: colorText.texts
      })
  }
    
  dayClick = (e, id) => {
    console.log(id);
  }

  monthChange(direction, date){
    direction === 'left' ? 
      date = moment(this.state.date).subtract(1, 'month')
      : 
      date = moment(this.state.date).add(1, 'month')
    let results = colorMap(this.getMonth(date),this.props.tenders)
    this.setState({
      date,
      colorDates: results.colorDates,
      texts: results.texts
    })
  }

  render(){
    const { height } = this.state;
    const month = this.getMonth(this.state.date)
    return(
      <AnimateHeight
      duration={ 500 }
      height={ height } // see props documentation bellow
    >
      <div key={'1'}>
        <CalendarNav 
          month = {moment(month[20]).format('MMMM YYYY')}
          left = {() => this.monthChange('left')}
          right = {() => this.monthChange('right')}
        />
        <CalendarBody 
          month = {month} 
          colors = {this.state.colorDates}
          texts = {this.state.texts}
          click = {(e,id) => this.dayClick(e,id)}
        />
        <Button 
          onClick = {() => this.props.toggleSmf('showCalendar')} 
          color = {DANGER}
          name='Close'
        />
      </div>
      </AnimateHeight>
    )
  }
}
export default onClickOutside(Calendar)