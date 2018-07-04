import React from 'react';


export default (props) => (
  <div style={headerSectionRight}>
    <div style={headerSection}>
      <button style={headerSection} onClick={props.showLogin}>
        LogIn
      </button>
    </div>
    <div style={headerSection}>
      <button style={headerSection} onClick={props.logout}>
        Logout
      </button>
    </div>
  </div>
)

const headerSectionRight = {
  float: 'right',
  height: '100%',
  backgroundColor: 'rgba(260,260,260,0.5)',
  borderRight: '1px solid darkgrey',
  textAlign: 'center'
}
const headerSection = {
  float: 'left',
  height: '40px',
  width: '80px',
  border: 'none'
}
