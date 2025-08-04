import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "../ToDoList.css";

interface TodoItem {
  text: string;
  completed: boolean;
}

export default function ToDoListFullyFunctionalHW() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState<TodoItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    if (inputValue.trim() !== "") {
      setListItems([...listItems, { text: inputValue.trim(), completed: false }]);
      setInputValue("");
      inputRef.current?.focus();
    }
  }, [inputValue, listItems]);

  const handleDelete = useCallback((index: number) => {
    setListItems(listItems.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setEditValue("");
    }
  }, [listItems, editIndex]);

  const handleEditClick = useCallback((index: number) => {
    setEditIndex(index);
    setEditValue(listItems[index].text);
  }, [listItems]);

  const handleEditChange = useCallback((e) => {
    setEditValue(e.target.value);
  }, []);

  const handleSaveClick = useCallback(() => {
    if (editValue.trim() === "" || editIndex === null) return;
    const updatedList = [...listItems];
    updatedList[editIndex].text = editValue.trim();
    setListItems(updatedList);
    setEditIndex(null);
    setEditValue("");
  }, [editValue, editIndex, listItems]);

  const handleCancelClick = useCallback(() => {
    setEditIndex(null);
    setEditValue("");
  }, []);

  const markAsComplete = useCallback((index: number) => {
    const updated = [...listItems];
    updated[index].completed = true;
    setListItems(updated);
  }, [listItems]);

  const markAsPending = useCallback((index: number) => {
    const updated = [...listItems];
    updated[index].completed = false;
    setListItems(updated);
  }, [listItems]);

  const pendingItems = useMemo(() => listItems.filter(item => !item.completed), [listItems]);
  const completedItems = useMemo(() => listItems.filter(item => item.completed), [listItems]);

  useEffect(() => {
    console.log("List updated", listItems);
  }, [listItems]);

  return (
    <div className="container">
      <div className="box">
        <h1>To Do List</h1>

        <div className="input-section">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            placeholder="Add your task"
            onChange={handleChange}
          />
          <button className="add-btn" onClick={handleAdd}>
            ADD
          </button>
        </div>

        <div className="status">
          <p>🕓 Pending: {pendingItems.length}</p>
          <p>✅ Completed: {completedItems.length}</p>
        </div>

        <h3>🕓 Pending Tasks</h3>
        <ul>
          {pendingItems.map((item, index) => {
            const realIndex = listItems.indexOf(item);
            return (
              <li key={realIndex}>
                {editIndex === realIndex ? (
                  <>
                    <input value={editValue} onChange={handleEditChange} />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item.text}
                    <button onClick={() => handleEditClick(realIndex)}>Edit</button>
                    <button onClick={() => markAsComplete(realIndex)}>Complete</button>
                    <button onClick={() => handleDelete(realIndex)}>Delete</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <h3>✅ Completed Tasks</h3>
        <ul>
          {completedItems.map((item, index) => {
            const realIndex = listItems.indexOf(item);
            return (
              <li key={realIndex} className="completed">
                {item.text}
                <button onClick={() => markAsPending(realIndex)}>Undo</button>
                <button onClick={() => handleDelete(realIndex)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
