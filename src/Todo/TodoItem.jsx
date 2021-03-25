import React from 'react';
import PropTypes from 'prop-types';
import {todoShape} from "../shape";

export default class TodoItem extends React.PureComponent {
  static propTypes = {
    todo: todoShape,
    onSetResolved: PropTypes.func,
    onDeleteTodo: PropTypes.func,
  };

  static defaultProps = {};

  sayHelloInterval = null;

  onChangeResolved = (event) => {
    this.props.onSetResolved(this.props.todo.id, event.target.checked);
  };

  onDelete = () => {
    this.props.onDeleteTodo(this.props.todo.id);
  };

  componentDidMount() {
    this.sayHelloInterval = setInterval(() => {
      console.log(`Todo ${this.props.todo.title} is saying hello`);
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.sayHelloInterval);
  }

  render() {
    const { title, resolved } = this.props.todo;
    return (
      <div>
        <strong>{title}</strong>
        <input type="checkbox" checked={resolved} onChange={this.onChangeResolved} />
        <button onClick={this.onDelete}>Del</button>
      </div>
    );
  }
}
