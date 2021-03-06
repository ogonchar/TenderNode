import React, { PureComponent } from 'react';
import onClickOutside from "react-onclickoutside";

import Button from '../../HocAndTemplates/Button.js';
import TableCell from '../../HocAndTemplates/TableCell.js';
import { DANGER, GREEN } from '../../../const.js'

/* 
  * Class contain form and logic for logining 
*/

class Login extends PureComponent {

  state = {
    email: '',
    username: '',
    password: '',
    formErrors: { email: '', password: '' },
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
    passConfValid: false,
  }


  handleClickOutside = () => {
    this.props.onClose('showLoginForm')
  }

  //When field changed, fuction validate state of fields and pass value to state
  onChange = function (e) {
    this.validateField(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Pass info to server
  submitLogin = (e) => {
    if(this.state.formValid) {
      fetch('/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
    }
  }

  validateField(fieldName, value) {
    //Checking email with standart email regex check. 
    // ErrorMessage will show only if field does not empty
    if (fieldName === 'email') {
      let emailValidLocal =
        value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      this.setState({
        emailValid: emailValidLocal ? true : false,
        errEmailMes: (!emailValidLocal || !value) ?
          'Please insert correct email' : '',
        email: value
      })
      //Checking for inputed password consists more then from 6 characters 
      // ErrorMessage will show only if field does not empty
    } else if (fieldName === 'password') {
      this.setState({
        passwordValid: value.length >= 6 ? true : false,
        errPassMes: (!(value.length >= 6) || !value) ?
          'Password is too short' : '',
        password: value
      })
    //Checking for inputed username consists more then from 5 characters 
    //and do not include ' ' 
    // ErrorMessage will show only if field does not empty
    } else if (fieldName === 'username') {
      this.setState({
        usernameValid: (!value.includes(' ') && value.length >= 5) ?
          true : false,
        errUserMes: ((!value.includes(' ')
          && value.length >= 5) || !value) ? '' : 'Name is too short',
        username: value
      })
      //Checking for inputed password confirmation equal to password
    } else if (fieldName === 'passwordConf') {
      this.setState({
        passConfValid: (value === this.state.password) ?
          true : false
        , errConfMes: (!(value === this.state.password)) ?
          'Password and confirmation should match' : ''
      })
    }
  }

  // set if form are valid and ifo can be sended to server
  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.passwordValid
    });
  }



  render() {
    return (
        <div style={{ padding: 20 }} key={'1'}>
          <TableCell
            type='input'
            name='username'
            onChange={(e) => this.onChange(e)}
            errMes={this.state.errUserMes}
            style={{
              border: this.state.usernameValid ?
                null : `2px solid ${DANGER}`
            }}
          />
          <TableCell
            type='input'
            name='email'
            onChange={(e) => this.onChange(e)}
            errMes={this.state.errEmailMes}
            style={{
              border: this.state.emailValid ?
                null : `2px solid ${DANGER}`
            }}
          />
          <TableCell
            type='input'
            name='password'
            onChange={(e) => this.onChange(e)}
            errMes={this.state.errPassMes}
            style={{
              border: this.state.passwordValid ?
                null : `2px solid ${DANGER}`
            }}
          />
          <TableCell
            type='input'
            name='passwordConf'
            onChange={(e) => this.onChange(e)}
            errMes={this.state.errConfMes}
            style={{
              border: this.state.passConfValid ?
                null : `2px solid ${DANGER}`
            }}
          />
          <TableCell
            type='input'
            name='logemail'
            onChange={(e) => this.onChange(e)}
          />
          <TableCell
            type='input'
            name='logpassword'
            onChange={(e) => this.onChange(e)}
          />
          <br />
          <Button
            onClick={() => this.props.onClose('showLoginForm')}
            color={DANGER}
            name='Close'
          />
          <Button
            onClick={this.submitLogin}
            color={GREEN}
            name='Login'
          />

        </div>

    )
  }
}

export default onClickOutside(Login);