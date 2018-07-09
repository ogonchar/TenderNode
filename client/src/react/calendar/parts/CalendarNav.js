import React from 'react'
import FontAwesome from 'react-fontawesome'

/* render header of calendar with arrows to change month back and forth
  Current month passed as props and assess basic on middle day of passed month 
*/

export default (props) => {
  return (
    <div style = {div}>
      <div 
        onClick = {() => props.change('left')}
        style={disp}
      >
        <FontAwesome name = 'arrow-left'/>
      </div>
      <h3 style={disp}>
        {props.month}
      </h3>
      <div 
        onClick = {() => props.change('right')}
        style={disp}
      >
        <FontAwesome name = 'arrow-right'/>
      </div>
    </div>
  )
}
const disp = {
  display: 'inline-block',
  border: 'none',
  width: 150,
  height: 50,
  paddingTop: 20,
}
const div = {
  textAlign: 'center',
  backgroundColor: 'lightgrey',
  margin: '0 3.3% 0  3%',
  borderRadius: '5px 5px 0 0'
}