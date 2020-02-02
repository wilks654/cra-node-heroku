import React, {Component} from 'react'
import {connect} from "react-redux"
import {registerUser} from "../actions/login"
import {withRouter} from "react-router-dom"
import {linkTo} from "../helper-functions"
import './login.css'


import registerButton from '../assets/Register_button.png'

class Register extends Component {

    constructor(props) {
      super(props)
      this.state = {
          username : '',
          email : '',
          password : '',
          confirmPassword : '',
          showCanvas : false
      }
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    register = () => {
        let {email, password, username, confirmPassword} = this.state;
        let {dispatch} = this.props
        
        if (email !== '' && password !== '' && username !== '' && password === confirmPassword) {
            dispatch(registerUser({
                password,
                email, 
                name : username
            }))
        }
    }

    addImage = () => {
        document.querySelector('.inputFile').click()
    }

    handleFileUpload = (e) => {
        
        this.setState({showCanvas : true})

        let imageFile = e.target.files[0];
        var reader  = new FileReader();

        reader.onloadend = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function(ev) {
            
            //document.getElementById("images").appendChild(image)
            let canvas = document.getElementById('canvas')
            image.width = canvas.width
            image.height = canvas.height
            let ctx = canvas.getContext('2d')
            

            //clear previous image
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //image, offset, offset, dimension, dimension
            ctx.drawImage(image, 0, 0, image.width, image.height)
            
          }
        }

        reader.readAsDataURL(imageFile) 
    }

    render() {
        return <div className = 'login-container'>

            <h1>Hackathon </h1>
            <div className = 'inputs-format'>
                <div className = 'grid-template'>
                        <input value = {this.state.username} placeholder= "Username" name = 'username' onChange = {this.onChange}   />
                   
                        <input value = {this.state.email} placeholder= "Email" name = 'email' onChange = {this.onChange}   />
                    
                        <input value = {this.state.password} type="password" placeholder= "Password" name = 'password' onChange = {this.onChange}   />
                    
                        <input value = {this.state.confirmPassword} type="password" placeholder= "Confirm Password" name = 'confirmPassword' onChange = {this.onChange}   />
                   
                </div>
            </div>

            <div id = 'add-image-outer-container'>
                <input class="inputFile" type="file" onChange = {(e) => this.handleFileUpload(e)} />
                {this.state.showCanvas ? (
                    <canvas id = 'canvas' ref = "canvas" onClick = {() => {this.addImage()}} />               
                ) : (           
                    <div className = 'add-image' onClick = {() => {this.addImage()}}>
                        <div>Add picture</div>
                    </div>
                )}
            </div> 

            
            <img src ={registerButton} onClick = {() => this.register()} />

            <div id = 'sign-up-container'>
               
                <p>Already have an account?</p> <p onClick = {() => {linkTo('login', this.props)}}  id = 'sign-up'>Login</p>
            </div>
        </div>
    }
}

const mapStateToProps = state => {

    return {
        
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Register))  

/**
 <div>
                    <div>
                        <input value = {this.state.username} placeholder= "Username" name = 'username' onChange = {this.onChange}   />
                    </div>
                    <div>
                        <input value = {this.state.email} placeholder= "Email" name = 'email' onChange = {this.onChange}   />
                    </div>
                </div>
                <div>
                    <div>
                        <input value = {this.state.password} type="password" placeholder= "Password" name = 'password' onChange = {this.onChange}   />
                    </div>
                    <div>
                        <input value = {this.state.password} type="password" placeholder= "Confirm Password" name = 'confirmPassword' onChange = {this.onChange}   />
                    </div>
                </div> 
 */