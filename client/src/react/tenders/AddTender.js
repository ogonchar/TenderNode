import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import TableCell from '../Hoc/TableCell.js'
import TableRowIn from '../Hoc/TableRowInput.js'

export default class NewTender extends Component{
  state = {
    id:'',
    stage: '',
    contact: '',
    city: '',
    price: '',
    objectOfPurchase: '',
    procuring: '',
    site: '',
    dateTo: '',
    dateTender: '',
    procuringContract: ''
  }

  onChange = (e,parameter) =>{
    if(parameter ==='dateTo' || parameter ==='dateTender'){
      this.setState({ [parameter]: moment(e)})
    }else{
      this.setState({[e.target.name] : e.target.value})
    }
  }

  addTender(){
    const tender = this.state
    fetch('/api/addTender', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id:tender.id,
        stage: tender.stage,
        contact: tender.contact,
        city: tender.city,
        price: tender.price,
        objectOfPurchase: tender.objectOfPurchase,
        procuring: tender.procuring,
        site: tender.site,
        dateTo: tender.dateTo,
        dateTender: tender.dateTo,
        procuringContract: tender.procuringContract
      })
    });
  }

  render(){
    return(
      <div>
        <h2>Add tender</h2>
        <TableRowIn name='id' func={this.onChange} placeholder='id'/>
        <TableRowIn name='name' func={this.onChange} placeholder='name'/>
        <TableCell>stage</TableCell>
        <TableCell>
          <select name='stage' value={this.state.stage} onChange={this.onChange}>
          <option value='filing'>filing</option>
          <option value='consideration'>consideration</option>
          <option value='complited'>complited</option>
          </select>
        </TableCell>
        <TableRowIn name='contact' func={this.onChange} placeholder='contact'/>
        <TableRowIn name='city' func={this.onChange} placeholder='city'/>
        <TableRowIn name='price' func={this.onChange} placeholder='price'/>
        <TableRowIn name='objectOfPurchase' func={this.onChange} placeholder='objectOfPurchase'/>
        <TableRowIn name='procuring' func={this.onChange} placeholder='procuring'/>
        <TableRowIn name='site' func={this.onChange} placeholder='site'/>
        <TableCell>dateTo</TableCell>
        <TableCell><DatePicker onChange={(e)=>this.onChange(e,'dateTo')}/></TableCell>
        <TableCell>dateTender</TableCell>
        <TableCell><DatePicker onChange={(e)=>this.onChange(e,'dateTender')}/></TableCell>
        <TableRowIn name='procuringContract' func={this.onChange} placeholder='procuringContract'/>
        <div className='footer'>
          <button onClick={this.addTender.bind(this)}>
            Add
          </button>
        </div>
      </div>
    )
  }

}
