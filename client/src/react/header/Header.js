import React, { PureComponent } from 'react';
import Adder from './parts/Adder.js';
import Modal from '../HocAndTemplates/Modal.js'
import Login from './parts/Login.js'
import Calendar from '../calendar/Calendar.js'
import Filters from '../filters/Filters.js'
import HeaderButtons from './parts/HeaderButtons.js'
import { GREY } from '../../const.js'

export default class Header extends PureComponent {

  /* 
    * State here keep parameters for toggling modal windows: 
    * for add tender, login form, filters and calendar
  */

  state = {
    addShow: false,
    showLoginForm: false,
    ShowFilters: false,
    showCalendar: false
  }

  // Function toggle all four modal window with corresponding parameter
  toggleSmf = (param) => {
    this.setState({
      [param]: !this.state[param]
    })
  }

  logout = () => {
    fetch('/logout', { method: 'GET' })
  }

  render() {

    /* 
      * HeaderButtons are renders buttons for modal windows
      * Adder cover add tender modal window with logic
      * 
    */

    return (
      <div className='header'>
        <img className='logo' src={require('../../img/logo.png')} alt='' />
        <HeaderButtons
          logout={this.logout}
          toggleSmf={(param) => this.toggleSmf(param)}
        />
        <Adder
          show={this.state.addShow}
          toggleSmf={(param) => this.toggleSmf(param)}
        />
        <Filters
          filtersData={this.props.filtersData}
          ShowFilters={this.state.ShowFilters}
        />
        <Modal
          name='login'
          margin='0 auto'
          show={this.state.showLoginForm}
          backgroundColor={GREY}
          width='500px'
          height='350px'
        >
          <Login
            onClose={(param) => this.toggleSmf(param)}
            showLoginForm={this.state.showLoginForm}
          />
        </Modal>
        <Modal
          show={this.state.showCalendar}
        >
          <Calendar
            toggleSmf={(param) => this.toggleSmf(param)}
            tenders={this.props.tenders}
            showCalendar={this.state.showCalendar}
          />
        </Modal>
      </div>
    )
  }
}
