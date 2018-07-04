import React from 'react'
import FontAwesome from 'react-fontawesome'

export default (props) => {
  return (
    <div style = {div}>
      <div 
        onClick = {props.left}
        style={disp}
      >
        <FontAwesome name = 'arrow-left'/>
      </div>
      <h3
      style={disp}
      >
        {props.month}
      </h3>
      <div 
        onClick = {props.right}
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