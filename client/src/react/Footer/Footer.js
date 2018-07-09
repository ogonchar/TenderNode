import React from 'react'
import TableCell from '../HocAndTemplates/TableCell.js'
import {DGREY}  from '../../const.js'

export default (props) => {
  return (
    <div style = {footer}>
      <TableCell>
      @OlegGonchar
      </TableCell>
      <TableCell>
      o.gonchar@live.com
      </TableCell>
    </div>
  )
}
const footer = { 
  backgroundColor: DGREY,
  color: 'grey',
  position: 'absolute',
  bottom:0,
  width: '100%',
  flex: '0 0 auto'
}
