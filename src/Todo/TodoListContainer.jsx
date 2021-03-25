import React from 'react';
import PropTypes from 'prop-types';
import TodoListPresentation from "./TodoListPresentation";
import TodoForm from "./TodoForm";

export default class TodoListContainer extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    todos: []
  };

  onAddTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  onSetResolved = (todoId, newValue) => {
    const index = this.state.todos.findIndex(elt => elt.id === todoId);
    const newTodos = [...this.state.todos];

    newTodos[index] = {
      ...newTodos[index],
      resolved: newValue,
    };

    this.setState({ todos: newTodos })
  };

  onDeleteTodo = (todoId) => {
    const index = this.state.todos.findIndex(elt => elt.id === todoId);
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <>
        <TodoForm onAddTodo={this.onAddTodo} />
        <TodoListPresentation
          todos={this.state.todos}
          onSetResolved={this.onSetResolved}
          onDeleteTodo={this.onDeleteTodo}
        />
      </>
    );
  }
}
