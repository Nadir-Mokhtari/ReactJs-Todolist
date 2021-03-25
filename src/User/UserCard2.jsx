import React from 'react';
import PropTypes from 'prop-types';

const UserCard2 = ({ user }) => (
  <div>
    {user.name.first} {user.name.last}
    <br/>
    <a href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </div>
);

UserCard2.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    email: PropTypes.string,
  }),
};

UserCard2.defaultProps = {};

export default React.memo(UserCard2);
