import "./css/header.css";
import "./css/filters.css";
import "./css/tenders.css";

import Background from './img/back3.jpg'

import React, {Component} from 'react';
import Tender from './react/tenders/Tenders.js';
import Header from './react/header/Header.js';
import Modal from './react/Hoc/Modal.js'
import Login from './react/userHandlers/Login.js'

export default class App extends Component{

  state = {
    filters: [],
    showLoginForm:false
  }
  filtersData=(filters)=>{
    this.setState({filters: filters})
  }

  toggleLogin = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    });
  }

  onCloseEdit = () => {
    this.setState({editShow:!this.state.showLoginForm})
  }

  render(){
    return(
      <div>
      <Header filtersData={this.filtersData} toggleLogin={this.toggleLogin}/>
      <Tender filters={this.state.filters} style={{backgroundImage: `url(${Background})`}}/>
      <Modal show={this.state.showLoginForm} onClose={this.onCloseEdit}>
        <Login/>
      </Modal>
      </div>
    )
  }
}
