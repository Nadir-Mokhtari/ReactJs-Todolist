import React from 'react';
import PropTypes from 'prop-types';
import classNames from './CountPresentation.module.css';

export default class CountPresentation extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    text: PropTypes.string,
  };

  static defaultProps = {
    text: "This is the current count",
  };

  render() {
    return (
      <>
        <p className={classNames.container}>{this.props.text} : {this.props.count}</p>
        <button onClick={this.props.onIncrement}>+1</button>
      </>
    )
  }
}
