import React, { useState } from "react";

const TodoForm = ({dispatch}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo != "") {
            dispatch(
                {
                    type: "ADD_TODO",
                    payload: newTodo
                }
            )
        }
        setNewTodo('');
    }


    return (
      <div>
        <input
          className=""
          type="text"
          name="newTodo"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
    );
  };
  export default TodoForm;
