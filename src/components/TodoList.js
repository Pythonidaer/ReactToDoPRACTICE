import React from 'react';
// Import Components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // no way to go up a level and use ToDoList state in form, so we keep it in App.js
    // State and props can only be passed downward into components, not up
    // console.log(filteredTodos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* write JavaScript code */}
                {/* for each to do from the state that we have we are going to render out a todo component */}
                {/* each child in a list should have a unique "key" prop */}
                {filteredTodos.map(todo => (
                    // Pass down data into state
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} id={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;