import React from 'react';

/* The Class used for displaying div in style of table cells*/

export default (props) =>{
  switch (props.type) {
    case 'input':
    return (
      <div>
      <input 
      style={Object.assign({}, styleInput, props.style)} 
      name={props.name}
      onChange = {props.onChange}
      placeholder={props.name}
      onChange = {props.onChange}
      />
      <span>
        {props.errMes}
      </span>
      </div>
    )
      break;
    default: return (<div style={style}>
      {props.children}{props.name}
    </div>)
  }
}
  
  const style = {
    margin:'auto',
    display:'inline-block',
    textAlign: 'center',
  	width:'50%',
    marginTop:'5px',
    height:'25px',
    paddingTop: '3px'
  }

  const styleInput = {
    margin:'auto',
    display:'inline-block',
    textAlign: 'center',
  	width:'45%',
    marginTop:'5px',
    height:'25px',
    paddingTop: '3px',
    borderRadius: '5px'
  }
  