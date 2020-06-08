import React from 'react';

const Todo = (props) => {

    return (
        <div key={props.items.id} className="todo">
            <p>{props.items.item}</p>
        </div>
    )
}

export default Todo;
