import React, {useReducer} from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/reducer";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todos={state} />
    </div>
  );
}

export default App;
