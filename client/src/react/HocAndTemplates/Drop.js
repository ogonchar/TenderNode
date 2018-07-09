import React from 'react'
import TableCell from './TableCell.js'

/* Template for dropdown list for api  */

export default (props) => {
  const options = () => {
    const res = props.values.map((opt,i) => {
      return <option key={i} value={opt}>{opt}</option>
    })
    return res
  }
  return (
    <div>
    <TableCell>{props.name}</TableCell>
    <TableCell>
      <select 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange}
        style = {select}>
      {options()}
      </select>
    </TableCell>
    </div>
  )
}
const select = {
  fontFamily: 'Roboto Slab',
  borderRadius: '4px',
  height: '20px',
  paddingLeft:'5px'
}
