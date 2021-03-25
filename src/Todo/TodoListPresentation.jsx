import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import {todoShape} from "../shape";


const TodoListPresentation = ({ todo, onSetResolved, onDeleteTodo }) => (
  <div>
    <h1>
      My Todo List
    </h1>
    <div>
      {this.props.todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onSetResolved={this.props.onSetResolved}
          onDeleteTodo={this.props.onDeleteTodo}
        />
      ))}
    </div>
  </div>
);

TodoListPresentation.propTypes = {
  todos: PropTypes.arrayOf(todoShape),
  onSetResolved: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};

TodoListPresentation.defaultProps = {
  todos: [],
};

export default TodoListPresentation;
