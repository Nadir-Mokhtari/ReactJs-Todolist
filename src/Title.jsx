import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component{
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (<h1>{this.props.children}</h1>);
  }
}
