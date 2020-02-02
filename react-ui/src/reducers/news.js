import {SET_NEWS} from '../actions/news';

export default function news (

    state = {
        
        news : null

    }, action

) {

    switch (action.type) {
        
        case SET_NEWS: {

            const {news} = action;
        
            return Object.assign({}, state, {
                news
            }); 
        }

        default: {
  
          return state
  
        }  
  
    }

}