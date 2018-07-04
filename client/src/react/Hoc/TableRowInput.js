import React from 'react';
import TableCell from './TableCell.js'

/*The class is using for input in add and edit tender section*/


export default (params) =>
  (<div style = {div}>
    <TableCell>
    {params.name}
    </TableCell>
    <TableCell>
      <input
        name={params.name}
        onChange={params.func}
        placeholder = {params.placeholder}
        value = {params.value}
        style = {input}
      >
      </input>
    </TableCell>
  </div>
)

const div = {
  height: '40px',
  borderBottom: '1px solid',
  borderColor: '#e2e2e2'
}
const input = {
  fontFamily: 'Roboto Slab',
  borderRadius: '4px',
  height: '20px',
  paddingLeft:'5px'
}
