import React, {
  PureComponent
} from 'react';

export default class Login extends PureComponent {

  state = {
    username: '',
    password: '',
    email: '',
    passwordConf: '',
    logemail: '',
    logpassword: '',
    formErrors: {email: '', password: ''},
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  onChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value
    })
  )

  submitLogin = (e) => (
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  )

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.validateField('password',this.state.password)
    this.validateField('email',this.state.email)
    this.validateField('username',this.state.username)
  }

  validateField(fieldName, value) {
    if (fieldName === 'email'){
        let emailValidLocal = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState({emailValid: emailValidLocal ? true : false})
        return
      }else if (fieldName === 'password'){
        this.setState({passwordValid: value.length >= 6 ? true : false})
      }else if (fieldName === 'username'){
        this.setState({usernameValid: (!value.includes(' ') && value.length>=5) ? true : false})
      }
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid &&
        this.state.passwordValid
    });
  }



  render(){
    let stylesPass = {
      border: this.state.passwordValid ? null : '1px solid red'
    }
    let stylesMail = {
      border: this.state.emailValid ? null : '1px solid red'
    }
    let styleUser = {
      border: this.state.usernameValid ? null : '1px solid red'
    }

    return(
      <div className="login-form">
          <input name="username" placeholder="username" onChange= {(e) =>this.onChange(e)}style={styleUser}/><br/>
          <input name="password" placeholder="Password" onChange={(e) =>this.onChange(e)} style={stylesPass}/><br/>
          <input name="email" placeholder="email" onChange={(e) =>this.onChange(e)} style={stylesMail}/><br/>
          <input name="passwordConf" placeholder="passwordConf" onChange={(e) =>this.onChange(e)}/><br/>
          <input name="logemail" placeholder="logemail" onChange={(e) =>this.onChange(e)}/><br/>
          <input name="logpassword" placeholder="logpassword" onChange={(e) =>this.onChange(e)}/><br/>
          <div className="tp">
            <button onClick={this.submitLogin}>LOGIN NOW</button>
          </div>

      </div>
    )
  }
}
