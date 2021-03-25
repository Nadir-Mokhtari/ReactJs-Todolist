import React from 'react';
import {fetchUser} from "./userService";

export default WrappedComponent => class Component extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    user: null,
  };

  onFetchUser = async () => {
    const user = await fetchUser();
    this.setState({ user: user });
  };

  componentDidMount() {
    this.onFetchUser();
  }

  render() {
    return (
      <>
        {this.state.user && <WrappedComponent
          {...this.props}
          user={this.state.user}
        />}
      </>
    );
  }
}
