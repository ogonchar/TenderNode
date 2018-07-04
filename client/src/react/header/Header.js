import React, { PureComponent } from 'react';
import Adder from './Adder.js';
import Modal from '../Hoc/Modal.js'
import Login from './userHandlers/Login.js'
import Calendar from '../calendar/Calendar.js'
import Filters from '../filters/Filters.js'
import HeaderButtons from './HeaderButtons.js'
import { GREY } from '../../const.js'

export default class Header extends PureComponent {

  state = {
    addShow: false,
    showLoginForm: false,
    ShowFilters: false,
    showCalendar: false
  }

  toggleSmf = (param) => {
    this.setState({
      [param]: !this.state[param]
    })
  }

  logout = () => {
    fetch('/logout', { method: 'GET' })
  }

  render() {
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
          show={this.state.showLoginForm}
          backgroundColor={GREY}
          width='500px'
          height='350px'
        >
          <Login
            onClose={(param) => this.toggleSmf(param)}
          />
        </Modal>
        <Modal
          show={this.state.showCalendar}
        >
          <Calendar
            toggleSmf={(param) => this.toggleSmf(param)}
            tenders={this.props.tenders}
          />
        </Modal>
      </div>
    )
  }
}
