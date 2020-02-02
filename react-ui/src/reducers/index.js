import { combineReducers } from 'redux';
import photos from './photos';
import login from './login';
import weather from './weather';
import news from './news';
import clothes from './clothes';
import tasks from './tasks';

const appReducer = combineReducers({
    photos,
    login,
    weather,
    clothes,
    news, 
    tasks
});
  
const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}
  
export default rootReducer;

