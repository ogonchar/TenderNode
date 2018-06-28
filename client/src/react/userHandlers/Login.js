import React, {Component} from 'react';

export default class Login extends Component{

  state={
    username:'',
    password:'',
    email:'',
    passwordConf:'',
    logemail:'',
    logpassword:''
  }

  onChange = (e) => (
    this.setState({
      [e.target.name]:e.target.value
    })
  )

  submitLogin = (e) => (
    fetch('/auth', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
  )

  render(){
    return(
      <div className="login-form">
          <input name="username" placeholder="username" onChange= {(e) =>this.onChange(e)}/><br/>
          <input name="password" placeholder="Password" onChange={(e) =>this.onChange(e)}/><br/>
          <input name="email" placeholder="email" onChange={(e) =>this.onChange(e)}/><br/>
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
