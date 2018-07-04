import React from 'react';

export default ({tend, onClickInfo, onClickEdit}) =>
    (
      <div style={tendcont}>
        <div style={Object.assign({}, styleBtnCommon, tendStageFill)}>
          {tend.stage}</div>
        <div style={Object.assign({}, styleBtnCommon, tendid)} type='button'>
          {tend.id}<br/><span style={lower}>№ аукциона</span></div>
        <div style={Object.assign({}, styleBtnCommon, tendName)} type='button'>
          {tend.contact}<br/><span style={lower}>Организация</span></div>
        <div style={Object.assign({}, styleBtnCommon, tendCity)}>{tend.city}<br/>
        <span style={lower}>Город</span></div>
        <div style={Object.assign({}, styleBtnCommon, tendPrice)}>{tend.price}<br/>
        <span style={lower}>Начальная цена</span></div>
        <div style={Object.assign({}, styleBtnCommon, tendInf)} type='button'
          id='theButton' onClick={onClickInfo}>Подробная информация</div>
        <div style={Object.assign({}, styleBtnCommon, tendEdit)}
          type='button' onClick={onClickEdit} >Edit</div>
      </div>
    )
    
const tendcont = {
  height: '60px',
  textAlign: 'center',
  verticalAlign: 'middle',
  marginBottom: '1px',
}

const styleBtnCommon = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  height:'inherit',
  border: 'none',
  float:'left',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}

const tendStageFill = {
  borderRadius: '5px 0px 0px 5px',
  width: '7%',
  backgroundColor:'rgb(158, 223, 169,0.95)',
  fontSize:'11px'
}

const tendStageCons = {
  borderRadius: '5px 0px 0px 5px',
  width: '7%',
  backgroundColor:'rgb(165, 195, 209,0.95)',
  fontSize:'11px'
}

const tendStageCompl = {
  borderRadius: '5px 0px 0px 5px',
  width: '7%',
  backgroundColor:'rgb(217, 168, 197,0.95)',
  fontSize:'11px'
}

const tendid = {
  width: '15%',
  backgroundColor: 'rgb(245, 245, 242,0.95)',
  cursor: 'pointer'
}

const tendName = {
  overflow: 'hidden',
  width: '30%',
  backgroundColor: 'rgb(245, 242, 250,0.95)',
  borderLeft: '1px solid rgb(260, 260, 260,0.6)',
  cursor: 'pointer'
}

const tendCity = {
  width: '12%',
  backgroundColor: 'rgb(245, 245, 242,0.95)',
  borderLeft: '1px solid rgb(260, 260, 260,0.6)'
}

const tendPrice = {
  width: '10%',
  backgroundColor: 'rgb(245, 245, 242,0.95)',
  borderLeft: '1px solid rgb(260, 260, 260,0.6)'
}

const tendInf = {
  width: '16%',
  backgroundColor: 'rgb(173, 179, 217,0.95)',
  borderLeft: '1px solid rgb(260, 260, 260,0.6)',
  cursor: 'pointer'
}

const tendEdit = {
  width: '9%',
  backgroundColor: 'rgb(255, 173, 51,0.8)',
  borderRadius: '0px 5px 5px 0px',
  cursor: 'pointer'
}
const lower = {
  fontSize: '10px'
}
