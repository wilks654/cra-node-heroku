import {SET_LOGGED_IN, SET_USER_CREDENTIALS} from '../actions/login';
import {SET_TOKEN} from '../actions/login';

export default function login (

    state = {
        
        loggedIn : false,
        userName : '',
        token : null

    }, action

) {

    switch (action.type) {
        
        case SET_LOGGED_IN: {
            const {loggedIn} = action
        
            return Object.assign({}, state, {
                loggedIn
            }); 
            
        }

        case SET_TOKEN: {
            const {token} = action

            return Object.assign({}, state, {
                token
            }); 

        }

        case SET_USER_CREDENTIALS: {
            const {userName} = action

            return Object.assign({}, state, {
                userName
            }); 
        }

        default: {
  
            return state
  
        }  
  
    }

}