import moment from 'moment';

const editParameter = (e, keys, values) =>{
    let tenderEdited = {}
    for(let i = 0; i < keys.length; i++){
        if (keys[i]===e.target.name) {values[i] =e.target.value}
      }
    keys.forEach((key,i) => (tenderEdited[keys[i].toString()] = values[i]))
    return tenderEdited;
}

const editDate = (e, keys, values, param) => {
  let tenderEdited = {}
    keys.forEach((key,i) => {
      if(param === 'dateTo'&& key === 'dateTo') {
        values[i] = moment(e)
      }
      if (param === 'dateTender'&& key === 'dateTender') {
        values[i] = moment(e)
      }
    })
  keys.forEach((key,i) => (tenderEdited[keys[i].toString()] = values[i]))
  return tenderEdited
}


export {editParameter, editDate}
