import React, {Component} from 'react'
import {connect} from "react-redux"
import {registerUser} from "../actions/login"
import {withRouter} from "react-router-dom"
import {linkTo} from "../helper-functions"
import './login.css'

class Register extends Component {

    constructor(props) {
      super(props)
      this.state = {
          username : '',
          email : '',
          password : ''
      }
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    register = () => {
        let {email, password, username} = this.state;
        let {dispatch} = this.props
        
        if (email !== '' && password !== '' && username !== '') {
            dispatch(registerUser({
                password,
                email, 
                name : username
            }))
        }
    }

    render() {
        return <div className = 'login-container'>
            <input value = {this.state.username} placeholder= "Username" name = 'username' onChange = {this.onChange}   />
            <input value = {this.state.email} placeholder= "Email" name = 'email' onChange = {this.onChange}   />
            <input value = {this.state.password} type="password" placeholder= "Password" name = 'password' onChange = {this.onChange}   />
            <button onClick = {() => {this.register()}}>Register</button>
            <div className = 'on-hover' onClick = {() => {linkTo('login', this.props)}}>Login</div>
        </div>
    }
}

const mapStateToProps = state => {

    return {
        
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Register))  