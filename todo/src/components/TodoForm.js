import React, { useState } from "react";

const TodoForm = ({dispatch}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo !== "") {
            dispatch(
                {
                    type: "ADD_TODO",
                    payload: {
                        item: newTodo,
                        id: Date.now(),
                        completed: false
                    }
                }
            )
        }
        setNewTodo("")
        document.getElementById("newTodo").reset()
    }

    const handleClear = (event) => {
        event.preventDefault();
        dispatch(
            {
                type: "CLEAR_TODO",
            }
        )
    }

    return (
      <div className="form-container">
          <form id="newTodo">
            <input
            className=""
            type="text"
            name="newTodo"
            onChange={handleChange}
            />
        <button onClick={handleSubmit}>Add Todo</button>
        <button onClick={handleClear}>Clear Finished Todos</button>
        </form>
      </div>
    );
  };
  export default TodoForm;
