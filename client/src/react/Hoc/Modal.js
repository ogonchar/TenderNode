import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../css/modalAnimation.css'
/* Class is Hoc for showing all modal */

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
            {backgroundColor: props.backgroundColor}
            
          )}
          key = {'dsdv'}
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
  margin: '0 auto',
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