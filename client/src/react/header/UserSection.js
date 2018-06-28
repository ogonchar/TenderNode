import React from 'react';

export default (props) =>(
    <div className="headerSectionRight">
  			<div className='headerSection'><button className='headerSection login'
            onClick={props.showLogin}>LogIn</button></div>
  			<div className='headerSection'><button className='headerSection logout'
            onClick={props.logout}>Logout</button></div>
    </div>
);
