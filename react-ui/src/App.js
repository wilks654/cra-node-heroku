import React from 'react'
import Routing from './Routing'
import './App.css'

import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from './actions/login'

function App(props) {
  let {dispatch} = props
  //<div id = 'absolute-top-right'>Logout</div>
  return (
    <div className="App">
      {props.loggedIn &&
        <div id = 'absolute-top-right' onClick = {() => dispatch(logout())}>Logout</div>
      }
      <Routing />
    </div>
  );
}
const mapStateToProps = state => {
  let {login} = state
  let {loggedIn} = login
  return {
    loggedIn
  }
  
}
export default withRouter(connect(mapStateToProps)(App)) 
