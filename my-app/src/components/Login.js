import React, { Component } from 'react'
import { login, resetPassword, auth} from '../helpers/auth'
import '../css/Login.css';
import '../bulma/css/bulma.css'
import icon from '../lithops icon.png'
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'
import firebase from 'firebase'

function setLErrorMsg(error) {
  return {
    loginMessage: error.message
  }
}

function setRErrorMsg(error) {
  return {
    registerError: error.message
  }
}

function setPasswordErrorMsg(error) {
  return {
    passwordError: error.message
  }
}
export default class Login extends Component {
    state = { registerError: null }
     handleRSubmit = (e) => {
    e.preventDefault()
     auth(this.email.value, this.pw.value)
     .catch(e => this.setState(setRErrorMsg(e)))
    
  // })
}

  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setLErrorMsg('Invalid username/password.'))
        })
  }
  state = { passwordError: null}
  
  resetPassword = () => {
    var remaind = document.getElementById('checkEmail');
    
    console.log(this.email.value, "hahahahahha")
    if (this.email.value == ''){
      document.getElementById('checkEmail').innerHTML = 'Please enter your email address';
      console.log(remaind,"yoyoyo")
    }else{
       resetPassword(this.email.value)
      .then(() => {
        document.getElementById('checkEmail').innerHTML = 'Password reset email sent to ' + this.email.value
      })
      .catch((error) => {
        document.getElementById('checkEmail').innerHTML = 'Email address not found.'
      })
   }
 }
                  
  signInWithGoogle = ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
   }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });

  }
  
  render () {
         
    return (
     
 <div className="layout-default">
          <section className="body is-primary">
              <div className="login">
               <article className="card is-rounded">
                <div className="card-content">
                  <h1 className="App-icons">                  
                    <img src={icon} alt= {icon} width="150"/>
                  </h1>
                   <form onSubmit={this.handleSubmit}>
                 
                  <p className="control has-icon">
                    <input className="input" ref={(name) => this.name = name} placeholder="Name/No need for login"/>
                   <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>

                  </p>
                  <p className="control has-icon">
                    <input className="input" type="email" ref={(email) => this.email = email} placeholder="Email"/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>

                  </p>
                  <p className="control has-icon">
                    <input className="input" type="password" ref={(pw) => this.pw = pw} placeholder="Password"/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>

                  </p>
                 
                  
                  <p className="control">
                    {
                    this.state.loginMessage &&
                    <div className="alert alert-danger" role="alert">
                      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                      <span className="sr-only">Error:</span>
                      &nbsp;{this.state.loginMessage} <a onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
    
                     </div>
                    }
                    <button  type="submit" className="button is-medium is-blackboard is-fullwidth">
                      Login
                    </button>
                      
                     
                     <button className="button is-blackboard is-fullwidth is-medium" onClick={this.signInWithGoogle}>
                     Sign in With Google</button>
   
                    </p>
                    
                  </form>


                  <form onSubmit={this.handleRSubmit}>
                   
                    <div className="control">
                    {
                     this.state.registerError &&
                    <div className="alert alert-danger" role="alert">
                      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                      <span className="sr-only">Error:</span>
                      &nbsp;{this.state.registerError}
                    </div>
                   }
                    <button  type="submit" className="button is-blackboard is-medium is-fullwidth">
                      Register
                    </button>
                    
                  
                   <div>
                         <li>
                          <a className="text is-text is-center" onClick={this.resetPassword}>forget your password?</a>
                          </li>
                          <span className="texta is-small is-info is-strong" id = "checkEmail"> <strong> </strong></span>
                         
                    </div>  
                  </div>
                  </form>
                 
                   
                  </div>

              </article>
              </div>
        </section>
      </div>


    )
  }
}



  // <div className="layout-default">
  //         <section className="body is-primary">
  //             <div className="login">
  //              <article className="card is-rounded">
  //               <div className="card-content">
  //                 <h1 className="App-icons">                  
  //                   <img src={icon} alt= {icon} width="150"/>
  //                 </h1>
  //                 <h1> Login </h1>
  //                 <form onSubmit={this.handleSubmit}>
  //                 <p className="form-group">
  //                   <input className="form-control" type="email" ref={(email) => this.email = email} placeholder="Email"/>
  //                 </p>
  //                 <p className="form-group">
  //                   <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
  //                 </p>
  //                 {
  //                   this.state.loginMessage &&
  //                   <div className="alert alert-danger" role="alert">
  //                     <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  //                     <span className="sr-only">Error:</span>
  //                    </div>
  //                 }
  //                <button type="submit" className="login-button ">Login</button>
  //                 </form>
  //               </div>
  //             </article>
  //             </div>
  //       </section>
  //     </div>