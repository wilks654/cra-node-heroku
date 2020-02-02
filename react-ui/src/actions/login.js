export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export function setLoggedIn(loggedIn) {
  return {
    type : SET_LOGGED_IN,
    loggedIn
  }
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type : LOGOUT
  }
}

export const SET_TOKEN = 'SET_TOKEN';
export function setToken(token) {
  return {
    type : SET_TOKEN,
    token
  }
}


export const SET_USER_CREDENTIALS = 'SET_USER_CREDENTIALS';
export function setUserCredentials(userName) {
  return {
    type : SET_USER_CREDENTIALS,
    userName
  }
}


export function authenticateUser(data) {
  
    return async function(dispatch) {

        try {
            const response = await fetch('/api/users/authenticate', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body : JSON.stringify(data)
            });
            
            //LOG response
            let {token, user} = await response.json()
            
            await dispatch(setToken(token))
            await dispatch(setUserCredentials(user.name))
            await dispatch(setLoggedIn(true))

        }

        catch (e) {
            console.error(e)
        }

        
  }

}

export function registerUser(data) {
  
    return async function(dispatch) {
        
        try {
            const response = await fetch('/api/users/register', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body : JSON.stringify(data)
            });
            
            console.log(response)
            //LOG response
            let {token, user} = await response.json()
            
            
            await dispatch(setToken(token))
            await dispatch(setUserCredentials(user.name))
            await dispatch(setLoggedIn(true))

        }

        catch (e) {
            console.error(e)
        }

        
  }
    



    return async function(dispatch) {
      return fetch('/api/users/register')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  
  }
