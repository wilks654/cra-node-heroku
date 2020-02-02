import {SET_WEATHER} from '../actions/weather';

export default function weather (

    state = {
        
        weather : null

    }, action

) {

    switch (action.type) {
        
        case SET_WEATHER: {

            const {weather} = action;
        
            return Object.assign({}, state, {
                weather
            }); 
        }

        default: {
  
          return state
  
        }  
  
    }

}