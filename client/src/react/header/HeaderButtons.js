import React from 'react';
import Button from '../Hoc/Button.js'
import {GREEN, DBLUE ,DGREY}  from '../../const.js'

export default (props) => {
    return (
        <div>
            <Button
                type = 'headerSection'
                name='Фильтры'
                styleDiv={headerSection}
                styleButton={filtersSectionToggle}
                onCklick={() => props.toggleSmf('ShowFilters')}
                font='filter'
            />
            <Button
                type = 'headerSection'
                name='Календарь'
                styleDiv={headerSection}
                styleButton={calendarToggle}
                onCklick={() => props.toggleSmf('showCalendar')}
                font='calendar'
            />
            <Button
                type = 'headerSection'
                name='Добавить'
                styleDiv={headerSection}
                styleButton={addToggleStyle}
                onCklick={() => props.toggleSmf('addShow')}
                font='plus'
            />
            <div style={headerSectionRight}>
                <Button
                    type = 'headerSection'
                    name='Login'
                    styleDiv={headerSection}
                    styleButton={headerSection}
                    onCklick={() => props.toggleSmf('showLoginForm')}
                    font='sign-in-alt'
                />
                <Button
                    type = 'headerSection'
                    name='Logon'
                    styleDiv={headerSection}
                    styleButton={headerSection}
                    onCklick={() => props.toggleSmf('showLoginForm')}
                    font='sign-out-alt'
                />
            </div>
        </div>
    );
};

const headerSection = {
    float: 'left',
    height: '40px',
    width: '80px',
    border: 'none',
    cursor: 'pointer'
  }

  const filtersSectionToggle = {
    width: '100%',
    height: '100%',
    border: 'none',
    float: 'left',
    backgroundColor: DBLUE,
    color: 'lightgrey',
    paddingLeft: '10px',
    paddingRight: '10px',
    cursor: 'pointer'
  }
  const calendarToggle = {
    width: '100%',
    height: '100%',
    border: 'none',
    float: 'left',
    backgroundColor: DGREY,
    color: 'black',
    paddingLeft: '10px',
    paddingRight: '10px',
    cursor: 'pointer'
  }
  const addToggleStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    float: 'left',
    backgroundColor: GREEN,
    color: 'black',
    paddingLeft: '10px',
    paddingRight: '10px',
    cursor: 'pointer'
  }
  
  const headerSectionRight = {
	float:'right',
	height:'100%',
	backgroundColor: 'rgba(260,260,260,0.5)',
	borderRight: '1px solid darkgrey',
	textAlign: 'center'
}