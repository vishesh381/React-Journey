import React, { Component, type ChangeEvent } from "react";
import InputForm from "./InputForm";
import ToDoItem from "./ToDoItem";

type Task = {
  text: string;
  completed: boolean;
};

type State = {
  inputValue: string;
  tasks: Task[];
};

class ToDoClass extends Component<{}, State> {
  state: State = {
    inputValue: "",
    tasks: [],
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddTask = () => {
    const { inputValue, tasks } = this.state;
    if (inputValue.trim() !== "") {
      this.setState({
        tasks: [...tasks, { text: inputValue.trim(), completed: false }],
        inputValue: "",
      });
    }
  };

  toggleTaskStatus = (index: number) => {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  render() {
    const { inputValue, tasks } = this.state;
    const pendingTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
      <div className="ToDoClass">
        <h1>To-Do List</h1>
        <InputForm
          inputValue={inputValue}
          onChange={this.handleInputChange}
          onAdd={this.handleAddTask}
        />

        <div>
          <h2>Pending Tasks</h2>
          {pendingTasks.map((task, index) => (
            <ToDoItem
              key={index}
              task={task}
              index={tasks.indexOf(task)}
              onToggle={this.toggleTaskStatus}
              buttonLabel="Complete"
            />
          ))}
        </div>

        <div>
          <h2>Completed Tasks</h2>
          {completedTasks.map((task, index) => (
            <ToDoItem
              key={index}
              task={task}
              index={tasks.indexOf(task)}
              onToggle={this.toggleTaskStatus}
              buttonLabel="Undo"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoClass;
