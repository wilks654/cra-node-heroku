import React, {Component} from 'react'
import {connect} from "react-redux"


import {withRouter} from "react-router-dom"
import {authenticateUser} from "../actions/login"
import {linkTo} from "../helper-functions"
import './login.css'

import loginButton from '../assets/Login_button.png'

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
            <input value = {this.state.password} type="password" placeholder= "Password" name = 'password' onChange = {this.onChange}  />
            <img src ={loginButton} onClick = {() => this.login()} />
            
            <div id = 'sign-up-container'>
                <p>New to the hackathon?</p> <p onClick = {() => {linkTo('register', this.props)}} id = 'sign-up'>{' Sign up'}</p>
            </div>
        </div>
    }
}

const mapStateToProps = state => {

    return {
        
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Login))  