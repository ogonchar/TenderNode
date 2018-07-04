import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import onClickOutside from "react-onclickoutside";

import TableRowIn from './TableRowInput.js'
import Button from './Button.js'
import Drop from './Drop.js'
import DateInput from './DateInput.js'
import { editParameter, editDate } from '../tenders/EditFunctions.js'
import {DANGER, GREEN } from '../../const.js'


class NewTender extends Component {
  state = {
    tender: this.props.tender
  }

  handleClickOutside = event => {
    this.props.onClose()
  }

  onChange = (e) => {
    let tenderEdited = {}
    let keys = Object.keys(this.state.tender)
    let values = Object.values(this.state.tender)
    this.setState({ tender: editParameter(e, keys, values) })
  }

  onChangeDate = (e, param) => {
    let tenderEdited = {}
    let keys = Object.keys(this.state.tender)
    let values = Object.values(this.state.tender)
    this.setState({ tender: editDate(e, keys, values, param) })
  }

  send() {
    const tender = this.state
    fetch('/api/addTender', {
      method: this.props.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tender: this.state.tender
      })
    });
  }

  render() {
    const { height } = this.state;
    let tender = this.state.tender;
    const subTender = () => {
      let keys = Object.keys(this.state.tender)
      let exclude = ['stage', 'dateTo', 'dateTender', '_id', '__v']
      let sub = []
      keys.forEach((key, i) => {
        if (!exclude.includes(key)) sub.push(
          <TableRowIn key={i} name={key} func={this.onChange} value={this.state.tender[key]} />
        )
      })
      return sub;
    }
    const divStyle = {
      margin: '2%'
    }
    return (
    
      <div style={divStyle} key={'1'}>
        {subTender()}
        <Drop
          name='stage'
          value={this.state.stage}
          onChange={this.onChange}
          values={['filing', 'consideration', 'complited']}
        />
        <DateInput
          name='dateTo'
          onChange={(e) => this.onChangeDate(e, 'dateTo')}
          selected={tender.dateTo}
        />
        <DateInput
          name='dateTender' onChange={(e) => this.onChangeDate(e, 'dateTender')}
          selected={tender.dateTender} />
        <br />
        <Button
          onClick={this.props.onClose}
          color={DANGER}
          name='Close'
        />
        <Button
          onClick={this.send.bind(this)}
          color={GREEN}
          name='Save'
        />
      </div>
    )
  }
}

export default onClickOutside(NewTender);