import React, {Component} from 'react';
import Modal from '../Hoc/Modal.js'
import AddTender from '../tenders/AddTender.js'

/*The class contain button and form for adding tender to server*/

export default class Adder extends Component {

  state = {
    addShow: false
  }

  toggleAddForm = (id) => {
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
      <div style = {headerSec}>
        <button style={bthAddTender} onClick ={this.toggleAddForm}>
          Add tender</button>
        <Modal show={this.state.addShow} onClose={this.onCloseAdder}>
          <AddTender/>
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
