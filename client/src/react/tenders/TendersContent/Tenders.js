import React from 'react';
import TableCell from '../../Hoc/TableCell.js'
import Section from './Section.js'
import Table from './Table.js'

const styleMainDiv = {
  paddingTop: '75px'
}

export default (props) => {
  return(
    <div style = {styleMainDiv}>
      {props.tenders.map((i) => (
        <div key = {i.id} style = {tendersContainer}>
          <Section
            tend = {i}
            onClickInfo = {(b) => props.onClickInfo(i.id)}
            onClickEdit = {(b) => props.onClickEdit(i.id)}
          />
          <div style = {Object.assign({}, {display: props.display.get(i.id)}
            , tbl)}>
          <Table tend = {i}/>
          </div>
        </div>
      ))}
    </div>
  )
}

const tendersContainer = {
  overflow:'auto',
  marginBottom: '30px',
  marginLeft: '3%',
  marginRight:'3%'
}
const tbl = {
  width: '100%',
  backgroundColor: 'rgb(226, 226, 226,0.95)',
  color:'black',
  marginBottom: '10px'
}
