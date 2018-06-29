import React from 'react';
import TableCell from './TableCell.js'

/*The class is using for input in add and edit tender section*/

const style = {

}

export default (params) =>
  (<div style = {style}>
    <TableCell>
    {params.name}
    </TableCell>
    <TableCell>
      <input
        name={params.name}
        onChange={params.func}
        placeholder = {params.placeholder}
        value = {params.value}
      >
      </input>
    </TableCell>
  </div>

)
