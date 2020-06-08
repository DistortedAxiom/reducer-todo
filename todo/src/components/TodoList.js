import React from 'react';
import Todo from './Todo';
import '../App.css'

const TodoList = (props) => {

    return (
        <div>
            {props.todos.list.map((todo, i) => (
                <Todo items={todo} key={i} dispatch={props.dispatch}/>
            ))}
        </div>
    )
}

export default TodoList;
