import {ADD_TASK, REMOVE_TASK} from '../actions/tasks';


export default function tasks (

    state = {
        
        tasks : ['task description', 'task description',
        'task description']

    }, action

) {
    
    switch (action.type) {
        
        case ADD_TASK: {

            const {task} = action;
            let tasks = [...state.tasks]
            tasks.push(task)
            return Object.assign({}, state, {
                tasks
            }); 
        }

        case REMOVE_TASK: {

            const {taskId} = action;
            let tasks = [...state.tasks]
            let newTasks = []
            
            tasks.forEach((task, id) => {
                if (taskId !== id) {
                    newTasks.push(task)
                }
            })

            return Object.assign({}, state, {
                tasks : newTasks
            }); 
        }

        default: {
  
          return state
  
        }  
  
    }

}