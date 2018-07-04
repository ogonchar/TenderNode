import React, {Component} from 'react';

import './css/main.css';
import Background from './img/back3.jpg'

import Tenders from './react/tenders/Main.js';
import Header from './react/header/Header.js';
import Footer from './react/Footer/Footer.js'

export default class App extends Component{

  state = {
    filters: [],
    tenders: [],
    toggleModal: false
  }
  filtersData=(filters)=>{
    this.setState({filters: filters})
  }

  getTenders = (tenders) => {
    this.setState({
      tenders
    });
  }

  render(){
    return(
      <div 
        className='back' 
        style={{backgroundImage: `url(${Background})` }}
      >
        <div className='content'> 
          <Header
            filtersData={this.filtersData}
            toggleLogin={this.toggleLogin}
            toggleFilters = {this.toggleFilters}
            logout = {this.logout}
            toggleCalendar = {this.toggleCalendar}
            tenders = {this.state.tenders} 
          />
          <Tenders
            tenders = {this.getTenders}
            filters={this.state.filters}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}
