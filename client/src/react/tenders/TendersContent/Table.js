import React from 'react';
import TableCell from '../../Hoc/TableCell.js'



export default ({tend}) =>
  (<div>
    <TableCell>objectOfPurchase</TableCell>
    <TableCell>{tend.objectOfPurchase}</TableCell>
    <TableCell>procuring</TableCell>
    <TableCell>{tend.procuring}</TableCell>
    <TableCell>site</TableCell>
    <TableCell>{tend.site}</TableCell>
    <TableCell>dateTo</TableCell>
    <TableCell>{tend.dateTo.toLocaleDateString()}</TableCell>
    <TableCell>dateTender</TableCell>
    <TableCell>{tend.dateTender.toLocaleDateString()}</TableCell>
    <TableCell>procuringContract</TableCell>
    <TableCell>{tend.procuringContract}</TableCell>
  </div>
      )
