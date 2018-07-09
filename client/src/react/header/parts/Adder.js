import React, {Component} from 'react';
import Modal from '../../HocAndTemplates/Modal.js'
import AddTender from '../../HocAndTemplates/Api.js'
import {GREY}  from '../../../const.js'

/*  
  * The class contain button and form for adding tender to db
*/

export default class Adder extends Component {

  state = {
    tender: {id:'',contact:'',city:'',price:'',objectOfPurchase:'',procuring:'',
      site:'',procuringContract:'', dateTo: new Date(), dateTender: new Date()
    }
  }

  render() {
      return (
        <Modal 
          name = 'Add tender'
          show = {this.props.show} 
          backgroundColor={GREY}
          height = '560px'
          width = '450px'
          margin='0 auto'
        >
          <AddTender
            onClose={() => this.props.toggleSmf('addShow')}
            tender = {this.state.tender}
            method ={'POST'}
            link = '/api/tenders/addTender'
          />
        </Modal>
      )
    }
  }


