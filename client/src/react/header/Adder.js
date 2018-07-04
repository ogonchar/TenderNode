import React, {Component} from 'react';
import Modal from '../Hoc/Modal.js'
import AddTender from '../Hoc/Api.js'
import {GREY}  from '../../const.js'

/*The class contain button and form for adding tender to server*/

export default class Adder extends Component {

  state = {
    tender: {id:'',contact:'',city:'',price:'',objectOfPurchase:'',procuring:'',
      site:'',procuringContract:'', dateTo: new Date(), dateTender: new Date()
    }
  }

  render() {
      return (
      <div style = {headerSec}>
        <Modal 
          name = 'Add tender'
          show = {this.props.show} 
          backgroundColor={GREY}
          height = '560px'
          width = '450px'
        >
          <AddTender
            onClose={() => this.props.toggleSmf('addShow')}
            tender = {this.state.tender}
            method ={'POST'}
          />
        </Modal>
      </div>)
    }
  }

  const headerSec = {
    display: 'inline-block'
  }
  const bthAddTender = {
    height: '40px',
    border: 'none',
    backgroundImage: 'linear-gradient(to bottom, #0ba360 0%, #3cba92 60%'
  }
