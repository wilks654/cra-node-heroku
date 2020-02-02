import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route, withRouter} from 'react-router-dom';

import Login from './login/Login';
import Images from './images/Images';
import News from './news/News';
import Tasks from './tasks/Tasks';

import Register from './login/Register';
import Dashboard from './dashboard/Dashboard';

class Routing extends Component {
  
  render () {
    
    //if user is logged in, allow unrestricted access
    const {location} = this.props;

    //CertificateDisplay
    return (
      <main>
          {this.props.loggedIn ? (
            <Switch location = {location} >
              <Route exact path = '/images' component = {Images} />
              <Route exact path = '/news' component = {News} />
              <Route exact path = '/tasks' component = {Tasks} />
              <Route exact path = '/*' component = {Dashboard} />
            </Switch>
          ) : (
            <Switch location = {location} >
              <Route exact path = '/register' component = {Register} />
              <Route exact path = '/*' component = {Login} />
            </Switch>
          )
          }
      </main>
    );

  }

}

const mapStateToProps = state => {

  const {login} = state;
  const {loggedIn} = login;
  
  return {
    loggedIn
  }
  
};

export default withRouter(connect(mapStateToProps)(Routing));
  