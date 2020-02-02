import React, {Component} from 'react'
import {connect} from "react-redux"
import {addTask, removeTask} from '../actions/tasks'
import {withRouter} from "react-router-dom"



import './Tasks.css'


class Tasks extends Component {

    constructor(props) {
      super(props)
      this.state = {
          loadingData : true,
          task : ''
      }
    }
    
    onChange = (e) => {
        this.setState({task : e.target.value})
    }

    addTask = () => {
        let {dispatch} = this.props;
        if (this.state.task !== '') {
            dispatch(addTask(this.state.task))
            this.setState({task : ''})
        }

    }

    removeTask = (id) => {
        let {dispatch} = this.props;
        dispatch(removeTask(id))
    }

    render() {
        let tasks = this.props.tasks.tasks

        let body = []
        tasks.forEach((task, id) => {
            body.push(
                <div key = {id} onClick = {() => {this.removeTask(id)} }>{task}</div>
            )
        });

        console.log(body)

        return (<div id = 'tasks-container'>
            <h3 className = 'absolute-top-left'>Tasks</h3>
                {body}
                <input value = {this.state.task} onChange = {(e) => this.onChange(e)} />
                <button onClick = {() => this.addTask()}>Add Task</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tasks } = state
 
    return {
       tasks
    }
    
}
      
export default withRouter(connect(mapStateToProps)(Tasks))  