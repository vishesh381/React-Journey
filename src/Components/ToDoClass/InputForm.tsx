import React, { Component, type ChangeEvent } from 'react';

type Props = {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

class InputForm extends Component<Props> {
  render() {
    const { inputValue, onChange, onAdd } = this.props;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder="Enter a task"
        />
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }
}

export default InputForm;
