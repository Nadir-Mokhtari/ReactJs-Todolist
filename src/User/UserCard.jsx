import React from 'react';
import PropTypes from 'prop-types';

export default class UserCard extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      email: PropTypes.string,
    }),
  };

  static defaultProps = {};

  render() {
    const {user} = this.props;
    return (
      <div style={{backgroundColor: 'purple'}}>
        {user.name.first} {user.name.last}
        <br/>
        <a href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
    );
  }
}
