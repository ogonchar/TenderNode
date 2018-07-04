import React from 'react';
import Section from './Section.js'
import Table from './Table.js'
import { GREY}  from '../../../const.js'

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
          <div style = {Object.assign({}, tbl)}>
          <Table tend = {i} display = {props.display.get(i.id)}/>
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
  backgroundColor: GREY,
  color:'black',
  marginBottom: '10px',
  borderRadius: '4px'
}
