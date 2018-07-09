import React from 'react';

/* Template for textArea or line input*/

export default (props) => {
    switch (props.type) {
        case 'textarea':
            return (
                <div>
                    <textarea
                        style={Object.assign({}, props.styles, textarea)}
                        name={props.name}
                        onChange={props.onChange}
                        placeholder={props.name}
                    />
                    <span>
                        {props.errMes}
                    </span>
                </div>
            )
        default: return (
            <div>
                <input
                    style={Object.assign({}, styleInput, props.style)}
                    name={props.name}
                    onChange={props.onChange}
                    placeholder={props.name}
                />
                <span>
                    {props.errMes}
                </span>
            </div>)
    }
};

const textarea = {
    width: '100%',
    borderRadius: '3px'
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