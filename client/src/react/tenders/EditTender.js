import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import TableCell from '../Hoc/TableCell.js'
import TableRowIn from '../Hoc/TableRowInput.js'

export default class NewTender extends Component{
  state = {
    id:this.props.tend.id,
    name:this.props.tend.name,
    stage: this.props.tend.stage,
    contact: this.props.tend.contact,
    city: this.props.tend.city,
    price: this.props.tend.price,
    objectOfPurchase: this.props.tend.objectOfPurchase,
    procuring: this.props.tend.procuring,
    site: this.props.tend.site,
    dateTo: this.props.tend.dateTo,
    dateTender: this.props.tend.dateTender,
    procuringContract: this.props.tend.procuringContract
  }

  onChange = (e,parameter) =>{
    if(parameter ==='dateTo' || parameter ==='dateTender'){
      this.setState({ [parameter]: moment(e)})
    }else{
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  addTender(){
    fetch('/api/editTender', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        stage: this.state.stage,
        contact: this.state.contact,
        price: this.state.price,
        objectOfPurchase: this.state.objectOfPurchase,
        procuring: this.state.procuring,
        site: this.state.site,
        dateTo: this.state.dateTo,
        dateTender: this.state.dateTender,
        procuringContract: this.state.procuringContract,
      })
    });
  }

  render(){
    return(
      <div>
        <TableRowIn name='id' func={this.onChange} value={this.state.id}/>
        <TableRowIn name='name' func={this.onChange} value={this.state.name}/>
        <TableCell>stage</TableCell>
        <TableCell><select name='stage' value={this.state.stage} onChange={this.onChange}>
            <option value='filing'>filing</option>
            <option value='consideration'>consideration</option>
            <option value='complited'>complited</option>
          </select></TableCell>
        <TableRowIn name='contact' func={this.onChange} value={this.state.contact}/>
        <TableRowIn name='city' func={this.onChange} value={this.state.city}/>
        <TableRowIn name='price' func={this.onChange} value={this.state.price}/>
        <TableRowIn name='objectOfPurchase' func={this.onChange} value={this.state.objectOfPurchase}/>
        <TableRowIn name='procuring' func={this.onChange} value={this.state.procuring}/>
        <TableRowIn name='site' func={this.onChange} value={this.state.site}/>
        <TableCell>dateTo</TableCell>
        <TableCell><DatePicker onChange={(e)=>this.onChange(e,'dateTo')} selected={moment(this.state.dateTo)}/></TableCell>
        <TableCell>dateTender</TableCell>
        <TableCell><DatePicker onChange={(e)=>this.onChange(e,'dateTender')} selected={moment(this.state.dateTender)}/></TableCell>
        <TableRowIn name='procuringContract' func={this.onChange} value={this.state.procuringContract}/>
        <div className='footer'>
          <button onClick={this.addTender.bind(this)}>
            Add
          </button>
        </div>
      </div>
    )
  }

}
