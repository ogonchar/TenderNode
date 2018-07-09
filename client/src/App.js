import React, {Component} from 'react';

import './css/main.css';
import './App.css';
import Background from './img/back3.jpg'

import Tenders from './react/tenders/Tenders.js';
import Header from './react/header/Header.js';
import Footer from './react/Footer/Footer.js'

export default class App extends Component{

  /* 
    * Filters are fetching from header with function filterData 
    * and represent array of string for filtering tenders in tenders block
    * 
    * Tenders are fetching from server by Tenders.js and then transfering to 
    * calendar to display important dates
  */

  state = {
    filters: [],
    tenders: []
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

    /* 
      * Header responsible for every modal windows and buttons for 
      * toggling except editing tender, this is rendered in tenders 
      * Tenders responsible for rendering main window with tenders
    */
   
    return(
      <div 
        className='back' 
        style={{backgroundImage: `url(${Background})` }}
      >
        <div className='content'> 
          <Header
            filtersData={this.filtersData}
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
