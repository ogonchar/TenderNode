import React,{ PureComponent } from 'react';
import Adder from './Adder.js';
import UserSection from './UserSection.js';

export default (props) => {

    return(
      <div style = {header}>
        <img style = {logo} src={require('../../img/logo.png')} alt=''/>
        <Adder />
        <UserSection logout = {props.logout} showLogin={props.toggleLogin}/>
        <div style = {headerSection}>
          <button style = {filtersSectionToggle}
            onClick={() => props.toggleFilters()}>Фильтры</button>
        </div>
      </div>
    )
}
const header = {
  width: '100%',
  backgroundColor: 'rgb(260, 260, 260)',
  backgroundColor: 'rgba(260, 260, 260, 0.5)',
  overflow: 'auto',
  height: '40px',
  position: 'fixed',
  zIndex: '3',
}
const logo = {
  float: 'left',
  height: '40px'
}
const headerSection = {
  float: 'left',
  height: '40px',
  width: '80px',
  border: 'none'
}
const filtersSectionToggle = {
  width: '100%',
  height: '100%',
  border: 'none',
  float: 'left',
  backgroundImage: 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)',
  color: 'lightgrey'
}
