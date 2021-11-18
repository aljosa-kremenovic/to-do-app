import React, { useState, useEffect } from 'react';
import styles from '../TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, []);

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={props.todo.title}
        onChange={(e) => {
          props.setUpdate(e.target.value, props.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

/* class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  componentWillUnmount() {
    console.log('Unmounting..');
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          <button
            onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
          >
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {this.props.todo.title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={this.props.todo.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, this.props.todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
} */

export default TodoItem;
