import {SET_PHOTOS} from '../actions/photos';


export default function photos (

    state = {
        
        photos : []

    }, action

) {
    
    switch (action.type) {
        
        case SET_PHOTOS: {

            const {payload} = action;
        
            return Object.assign({}, state, {
                photos : payload
            }); 
        }

        default: {
  
          return state
  
        }  
  
    }

}