import React, {
  Component
} from 'react';
import Modal from '../Hoc/Modal.js'
import AddTender from '../tenders/AddTender.js'

export default class Adder extends Component {
  state = {
    addShow: false
  }

  addTender = (id) => {
    this.setState({
      addShow: !this.state.addShow
    })
  }
  onCloseAdder = () => {
    this.setState({
      addShow: !this.state.addShow
    })
  }

  render() {
      return (
      <div className = "headerSec">
      <button className = "bthAddTender" onClick ={this.addTender}>Add tender</button>
      <Modal show={this.state.addShow} onClose={this.onCloseAdder}>
        <AddTender/>
      </Modal>
      </div>)
    }
  }
