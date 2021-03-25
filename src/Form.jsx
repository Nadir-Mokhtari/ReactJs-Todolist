import React from 'react';

export default class Form extends React.Component {
  state = {
    value: '',
  };

  onChange = event => {
    const newValue = event.target.value;
    this.setState({ value: newValue });
  }

  render() {
    return (
      <>
        <input className="" style={{backgroundColor: 'blue'}} value={this.state.value} onChange={this.onChange} />
        {this.state.value.length > 10 && 'Vous avez tapé plus de 10 caractères'}
      </>
    );
  }
}
