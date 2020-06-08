import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>
            {props.todos.list.map(todo => (
                <Todo items={todo} />
            ))}
        </div>
    )
}

export default TodoList;
