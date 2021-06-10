import React from 'react';

// so props is not necessary to write
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Write JavaScript code/functions/etc
  const inputTextHandler = (e) => {
    // console.log out the event
    // How to add events to button?
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    // Stop refreshing the page
    e.preventDefault();
    setTodos([
      // If we have todos, just pass them into here
      // For deployed, Math.random() should be like a UUID package instead
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    // Set state of input back to empty.
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
    return(
        <form>
          {/* every time our input changes, this function is being run */}
          {/* we need to set the value of our input to keep it/our UI in check */}
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;