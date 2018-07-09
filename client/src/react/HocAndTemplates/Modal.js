import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../css/modalAnimation.css'

/* Wrapper for showing all modal windows */

export default (props) => {

    
  return(
    <ReactCSSTransitionGroup
    transitionName="modal"
    transitionEnter={true}
    transitionLeave={true}
    transitionEnterTimeout={100}
    transitionLeaveTimeout={100}
    >          
      {props.show ? 
        (
        <div 
            style={Object.assign({},
            modalStyle, 
            {width: props.width},
            {height: props.height},
            {margin: props.margin},
            {backgroundColor: props.backgroundColor}
          )}
          key = {1}
        >
          <h2 style = {header}>{props.name}</h2>
          {props.children}
        </div>
        )
      : 
      null}
    </ReactCSSTransitionGroup>
  )

}


const modalStyle = {

  borderRadius: 5,
  position: 'fixed',
  top: 50,
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: 'center',
  padding: '10px'
};

const header = {

}