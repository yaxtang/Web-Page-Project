import React, { Component } from 'react'
//import '../bootstrap/css/bootstrap.css'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Gallery from './Gallery'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import '../css/index.css';
import '../bulma/css/bulma.css'
import icon from '../lithops icon.png'
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (

    <BrowserRouter>
     <section>
          <div className="hero is-info is-bold is-medium">
            <div className="hero-header">
            <ul className="level is-mobile">
                <div className="level-left">
                <p>
                   <img src={icon} alt= {icon} width="100"/>
                </p>
                <div>
                  <li className="title">Lithops Garden</li>
                </div>
                </div>
                <li className="level-right">
                  <Link to="/" className="subtitle has-text-centered is-medium">Blog</Link>
                </li>
             
                <li className="level-right">
                  <Link to="/gallery" className="subtitle has-text-centered is-text is-medium">Gallery</Link>
                </li>
                
                <li className="level-right">
                <Link to="/about" className="subtitle has-text-centered is-text is-medium">About</Link>
                </li>
                
                <li className="level-right">
                  <Link to="/profile" className="subtitle has-text-centered is-medium">Profile</Link>
                </li>
                
                <li className="level-right">
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="subtitle is-red is-medium has-text-centered">Logout</button>
                    : <span>
                        <Link to="/login" className="subtitle has-text-centered is-medium">Login/Register</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </div>

          <div className="hero-body">
            <div className="containter">
             </div>
          </div>

          <div className="hero-footer">
            <div className="containter">
             </div>
          </div>
          <div className="container">
            <div className="switch">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route authed={this.state.authed} path='/gallery' component={Gallery} />
                <Route authed={this.state.authed} path='/about' component={About} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PrivateRoute authed={this.state.authed} path='/profile' component={Profile} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>

        </section>
      
      
      </BrowserRouter>
    );
  }
}
