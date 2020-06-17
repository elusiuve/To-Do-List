import React, {Component} from 'react';
import './App.css';
import ToDoItem from './toDoItem/toDoItem';
import toDoData from "./toDoItem/toDoData";

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoItem: toDoData
        }
    }

    handleChange = (id) => {
        const index = this.state.toDoItem.map((item) => item.id).indexOf(id)
        this.setState(state => {
            let {toDoItem} = state
            toDoItem[index].completed = true
            return toDoItem
        })
    }

    render() {
        const {toDoItem} = this.state
        const activeTasks = toDoItem.filter(task => task.completed === false)
        const completedTasks = toDoItem.filter(task => task.completed === true)
        const finalTasks = [...activeTasks, ...completedTasks].map((item) => {
            return (
                <ToDoItem
                    key={item.id}
                    description={item.description}
                    completed={item.completed}
                    handleChange={() => {
                        this.handleChange(item.id)
                    }}
                />
            )
        })
        return (
            <div className="App">
                <h1>To-Do List</h1>
                {finalTasks}
            </div>
        )
    }
}

export default App;
