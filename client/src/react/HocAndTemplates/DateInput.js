import React from 'react'
import TableCell from './TableCell.js'
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default (props) => {
  return (
    <div>
      <TableCell>{props.name}</TableCell>
      <TableCell><DatePicker  
        style = {style} 
        onChange={props.onChange}
        selected={moment(props.selected)}/></TableCell>
    </div>
  )
}
const style = {
}
