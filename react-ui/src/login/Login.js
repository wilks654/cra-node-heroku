import React, {Component} from 'react'
import {connect} from "react-redux"
import {getPhotos} from '../actions/photos'

import {withRouter} from "react-router-dom"
import {authenticateUser} from "../actions/login"
import {linkTo} from "../helper-functions"
import './login.css'

class Login extends Component {

    constructor(props) {
      super(props)
      this.state = {
          email : '',
          password : ''
      }
    }

    login = () => {
        let {email, password} = this.state;
        let {dispatch} = this.props
        
        if (email !== '' && password !== '') {
            dispatch(authenticateUser({
                password,
                email
            }))
        }

    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return <div className = 'login-container'>
            <input value = {this.state.email} placeholder= "Email" name = 'email' onChange = {this.onChange}  />
            <input value = {this.state.password} type="password" placeholder= "password" name = 'password' onChange = {this.onChange}  />
            <button onClick = {() => this.login()}>Login</button>
            <div className = 'on-hover' onClick = {() => {linkTo('register', this.props)}}>Register</div>
        </div>
    }
}

const mapStateToProps = state => {

    return {
        
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Login))  