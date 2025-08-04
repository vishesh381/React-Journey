import React, { Component } from 'react';

type Task = {
  text: string;
  completed: boolean;
};

type Props = {
  task: Task;
  index: number;
  onToggle: (index: number) => void;
  buttonLabel: string;
};

class ToDoItem extends Component<Props> {
  render() {
    const { task, index, onToggle, buttonLabel } = this.props;

    return (
      <div>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <button onClick={() => onToggle(index)}>{buttonLabel}</button>
      </div>
    );
  }
}

export default ToDoItem;
