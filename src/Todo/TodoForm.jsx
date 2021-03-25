import React from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends React.PureComponent {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    title: '',
  };

  onSubmit = () => {
    const todo = {
      id: Date.now(),
      title: this.state.title,
      resolved: false,
    };

    this.props.onAddTodo(todo);
  };

  onChange = (event) => {
    this.setState({
      title: event.target.value,
    })
  };

  render() {
    return (
      <>
        <input onChange={this.onChange} value={this.state.title} />
        <button onClick={this.onSubmit}>Go</button>
      </>
    );
  }
}
