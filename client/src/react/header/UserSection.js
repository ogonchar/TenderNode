import React from 'react';

export default (props) =>(
      <div className="headerSectionRight">
        <div className='headerSection'><button onClick={props.showRegistration}>Sign In</button></div>
  				<div className='headerSection'><button onClick={props.showLogin}>LogIn</button></div>
  				<div className='headerSection'><button onClick={props.logout}>Logout</button></div>
    </div>
  );
