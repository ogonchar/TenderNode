import React,{ PureComponent } from 'react';
import Adder from './Adder.js';
import UserSection from './UserSection.js';
import Filters from './filters/Filters.js'

export default class Header extends PureComponent{

  state = {
    displayFilters: "none"
  };

  toggleFilters() {
    this.setState({displayFilters:(this.state.displayFilters==="none") ? "block":"none"})

  }

  filtersData = (val) => {
      this.props.filtersData(val)
    };

  showLogin = () => {
    this.props.toggleLogin()
  }

  logout = () => {
    fetch('/logout', {method: 'GET'})
  }

  render(){
    return(
      <div className="header">
      <img className='logo' src={require('./img/logo.png')} alt=''/>
      <Adder />
      <UserSection logout = {this.logout} showLogin={this.showLogin}/>
      <div className = "headerSection">
      <button className="filtersSectionToggle"
        onClick={() => this.toggleFilters()}>Фильтры</button>
      </div>
      <Filters onUpdate={this.filtersData}
        style={{display: this.state.displayFilters}}/>
      </div>
    )
  }
}
