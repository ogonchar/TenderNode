import moment from 'moment';
/* Function needed to edit chosen parameter in tender 
and return new tender with chamged parameter*/
const editParameter = (e, keys, values) =>{
    let tenderEdited = {}
    console.log(keys.indexOf(e.target.name));
    
    for(let i = 0; i < keys.length; i++){
      
        if (keys.indexOf(e.target.name) >= 0) 
        {
          values[keys.indexOf(e.target.name)] =e.target.value
        }
        else{
          keys[keys.length] = e.target.name
          values[values.length] = e.target.value
        }
      }
    keys.forEach((key,i) => (tenderEdited[keys[i].toString()] = values[i]))
    return tenderEdited;
}
/* Function needed to edit chosen date in tender 
and return new tender with chamged date*/
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
