import React from 'react'
import PropTypes from 'prop-types'

export default (props) => {
  return (
    <div style = {filtersContainer}>
      <button style = {filtersToggle}
        onClick={() => props.toggleFilters()}>
        Сайт процедуры</button>
      <div style = {Object.assign({}, dropdownMenu, {display:props.displayFilter})}>
        <div style = {buttonWrapper}>
          <button style={Object.assign({}, options,
              {background: props.checkedStyle[props.checkValue[0]]})}
            onClick={(e) => props.checkingFilterHandler(e, props.filterValue[0])}
            >{props.filterValue[0]}
          </button>
        </div>
        <div style = {buttonWrapper}>
          <button style={Object.assign({}, options,
              {background: props.checkedStyle[props.checkValue[1]]})}
            onClick={(e) => props.checkingFilterHandler(e, props.filterValue[1])}
            >{props.filterValue[1]}
          </button>
        </div>
        <div style = {buttonWrapper}>
          <button style={Object.assign({}, options,
              {background: props.checkedStyle[props.checkValue[2]]})}
            onClick={(e) => props.checkingFilterHandler(e, props.filterValue[2])}
            >{props.filterValue[2]}
          </button>
        </div>
      </div>
    </div>
  )
}


const filtersToggle = {
height: '30px',
width:'100%',
float: 'left',
padding: '0',
border: 'none',
color : 'lightgrey',
backgroundColor: '#303030',
backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
}
const filtersContainer = {
position: 'relative',
Height:'30px',
zIndex: '9999',
width:'20%',
margin:'none',
float: 'left'
}
const dropdownMenu = {
width:'100%',
marginTop: '30px',
position: 'absolute',
zIndex: '9999',
display: 'none',
fontSize: '20px',
color: 'rgb(149, 153, 150)',
float: 'left',
backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
}
const options = {
height: '100%',
width: '100%',
border: 'none',
color: 'lightgrey'
}
const buttonWrapper= {
height: '30px'
}
