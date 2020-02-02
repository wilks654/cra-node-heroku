import {SET_CLOTHES_SUMMARY} from '../actions/clothes';


export default function clothes (

    state = {
        
        clothes : {}

    }, action

) {
    
    switch (action.type) {
        
        case SET_CLOTHES_SUMMARY: {

            const {clothes} = action;
        
            return Object.assign({}, state, {
                clothes
            })
        }

        default: {
  
          return state
  
        }  
  
    }

}