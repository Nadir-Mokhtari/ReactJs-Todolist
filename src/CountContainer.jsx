import React from 'react';
import CountPresentation from "./CountPresentation/CountPresentation";

export default class CountContainer extends React.Component {
  state = {
    count: 0
  };

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <CountPresentation
        count={this.state.count}
        onIncrement={this.onIncrement}
        //text="Current count"
      />
    );
  }
}

