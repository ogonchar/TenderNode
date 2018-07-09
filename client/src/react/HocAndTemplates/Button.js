import React from 'react'
import TableCell from './TableCell.js'
import FontAwesome from 'react-fontawesome'



export default (props) => {
  switch (props.type) {
    case 'headerSection':
    return (
      <div style = {props.styleDiv}>
          <button style = {props.styleButton}
            onClick={props.onCklick}>
            <FontAwesome name = {props.font}/>  {props.name}</button>
        </div>
    )
    default: return (
      <TableCell>
      <div onClick = {props.onClick} style = {Object.assign({}, {backgroundColor:props.color}, div)}
      >
        {props.name}
      </div>
      </TableCell>
    )
  }
}
const div = {
  verticalAlign: 'middle',
  margin:'auto',
  cursor: 'pointer',
  height: '30px',
  paddingTop:'8px',
  width: '100px',
  textAlign: 'center',
  borderRadius: '3px',
}
