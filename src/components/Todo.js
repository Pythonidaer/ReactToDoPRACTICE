import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        // modify state
        // updates UI automatically
        // setTodos function to modify state
        // filter state out to match whatever is clicked on
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo);
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            //         // if the item clicked is the same as the todo.id
            if (item.id === todo.id) {
                //             // flip property of item since this is Boolean
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            {/* if state of todo.completed is true, add a state, if not, don't */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;