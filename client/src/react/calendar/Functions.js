import moment from 'moment';
import {ORANGE, BLUE, BREEZE, GREEN}  from '../../const.js'

const colorMap = (month, tenders) => {
    let colorDates = new Map();
    let texts = new Map();
    for (let i = 0; i < month.length; i++) {
        colorDates.set(month[i].format('MM-DD'), BREEZE);
        if (moment().format('MM-DD') === month[i].format('MM-DD')){
          colorDates.set(month[i].format('MM-DD'), GREEN);
        }
        tenders.forEach((t) => {
          if (moment(t.dateTo).format('MM-DD') === month[i].format('MM-DD')){
            colorDates.set(month[i].format('MM-DD'), ORANGE);
            texts.set(month[i].format('MM-DD'), t.id + '\n filing')
          }
          if (moment(t.dateTender).format('MM-DD') === month[i].format('MM-DD')){
            colorDates.set(month[i].format('MM-DD'), BLUE);
            texts.set(month[i].format('MM-DD'), t.id + '\n tender')
          }
        })
    }
    return {texts, colorDates}
}

export {colorMap}