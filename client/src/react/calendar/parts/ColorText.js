import moment from 'moment';
import { ORANGE, BLUE, BREEZE, GREEN, RED } from '../../../const.js'

/* 
  * Setting the custom properties of colors and texts for 
  * dates in month
  * 
  * Since additional properties of passed moment objects, 
  * there needed to compare choosen format
  * 
  * At first we need to set every color as standart and then find dates which 
  * corresponds with tenders date of filing and tenders and set respective colors
  * and texts. In the end we need to compare reminders dates and set color and text
  * for them

*/

const colorText = (date, tenders, reminders) => {
  let month = getMonth(date)
  for (let i = 0; i < month.length; i++) {
    month[i].color = BREEZE
    month[i].text = {}
    if (moment().format('MM-DD-YY') === moment(month[i]).format('MM-DD-YY')) {
      month[i].color = GREEN
    }
    tenders.forEach((t) => {
      if (moment(t.dateTo).format('MM-DD-YY') 
          === moment(month[i]).format('MM-DD-YY')) {
        month[i].color = ORANGE;
        month[i].text.filing = t.city + '\n filing'
      }
      if (moment(t.dateTender).format('MM-DD-YY') 
          === moment(month[i]).format('MM-DD-YY')) {
        month[i].color = BLUE;
        month[i].text.tender = t.city + '\n tender'
      }
    })
    reminders.forEach((r) => {
     
      if (moment(r.dateDestination).format('MM-DD-YY')
          === moment(month[i]).format('MM-DD-YY')) {
            month[i].color = RED;
            month[i].text.reminder = r.text
          }
    })
  }  
  return month
}

/* function return 6 weeks of adtes in moment format with passed 
date in the middle to render standard representation of month in calendar */

const getMonth = (date) => {
  let month = []
  //getting first date of week preceeding first day of current month
  let fday = moment(date).startOf('month').subtract(1, 'days')
    .startOf('week')
  fday.color = 'green'
  //since in moment first day of week is sunday initially adding one day
  for (let i = 0; i < 42; i++) {
    fday.add(1, 'days')
    month[i] = (moment(fday))
  }
  return month
}

export { colorText, getMonth }