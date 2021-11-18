/* import { render } from '@testing-library/react'; */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

//U funkcionalnu prebaciti
/* class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
} */

export default TodosList;
