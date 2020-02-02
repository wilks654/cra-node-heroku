export const ADD_TASK = 'ADD_TASK';
export function addTask(task) {
  return {
    type : ADD_TASK,
    task
  }
}

export const REMOVE_TASK = 'REMOVE_TASK';
export function removeTask(taskId) {
  return {
    type : REMOVE_TASK,
    taskId
  }
}

/*
export function addTask(task) {
  
  return function(dispatch) {
    dispatch(addTask(task))
  } 

}
*/