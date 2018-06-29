import React from 'react';

/* The Class used for displaying div in style of table cells*/

const style = {
  display:'inline-block',
  textAlign: 'center',
	width:'45%',
	borderBottom: '1px solid',
	borderTop: '1px solid',
	borderColor: 'rgb(224, 224, 224)',
  marginTop:'5px',
  height:'25px'
}

export default (params) =>
  (<div style={style}>
    {params.children}
  </div>)
