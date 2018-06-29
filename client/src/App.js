
import './css/main.css';

import Background from './img/back3.jpg'

import React, {Component} from 'react';
import Tender from './react/tenders/Main.js';
import Header from './react/header/Header.js';
import Modal from './react/Hoc/Modal.js'
import Login from './react/userHandlers/Login.js'
import Filters from './react/filters/Filters.js'

export default class App extends Component{

  state = {
    filters: [],
    showLoginForm: false,
    ShowFilters: false
  }
  filtersData=(filters)=>{
    this.setState({filters: filters})
  }

  toggleLogin = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    });
  }

  toggleFilters = () => {
    this.setState({
      ShowFilters: !this.state.ShowFilters
    });
  }

  onCloseLogin = () => {
    this.setState({showLoginForm:!this.state.showLoginForm})
  }

  logout = () => {
    fetch('/logout', {method: 'GET'})
  }

  render(){
    return(
      <div className='back' style={{backgroundImage: `url(${Background})` }}>
      <Header filtersData={this.filtersData} toggleLogin={this.toggleLogin}
        toggleFilters = {this.toggleFilters} logout = {this.logout}/>
      <Filters filtersData={this.filtersData} ShowFilters={this.state.ShowFilters}/>
      <Tender filters={this.state.filters} />

      <Modal show={this.state.showLoginForm} onClose={this.onCloseLogin}>
        <Login/>
      </Modal>
      </div>
    )
  }
}
