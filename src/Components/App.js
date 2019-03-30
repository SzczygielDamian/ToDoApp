import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.counter = 2;
    this.state = {
      task: [
        {
          id: 0,
          text: "Zrobić projekt",
          date: "2018-02-15",
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: 1,
          text: "zarać w FIFE",
          date: "2018-05-15",
          important: false,
          active: true,
          finishDate: null
        }
      ]
    };
  }

  deleteTask = id => {
    const tasks = [...this.state.task];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      task: tasks
    });
  };

  ChangeTaskStatus = id => {
    console.log("Change  id " + id);
    const tasks = [...this.state.task];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      task: tasks
    });
  };

  addTask = (text, date, important) => {
    const Task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      task: [...prevState.task, Task]
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTask add={this.addTask} />
          <hr />
          <TaskList
            tasks={this.state.task}
            delete={this.deleteTask}
            change={this.ChangeTaskStatus}
          />
        </header>
      </div>
    );
  }
}

export default App;
