import React from 'react';
import '../App.css'

const Todo = (props) => {

    const ToggleTodo = (event) => {
        event.preventDefault();
        props.dispatch(
            {
                type: "COMPLETE_TODO",
                payload: props.items.id
            }
        )
    }


    return (
        <div className={props.items.completed ? "completed" : ""}>
            <p onClick={ToggleTodo}>{props.items.item} {props.items.completed ? 'DONE' : 'TODO'}</p>
        </div>
    )
}

export default Todo;
