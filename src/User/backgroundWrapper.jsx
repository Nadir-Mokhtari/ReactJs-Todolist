import React from 'react';

export const backgroundWrapper = (WrappedComponent) => {
  class Component extends React.PureComponent {
    render() {
      return (
        <div style={{backgroundColor: 'pink'}}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  return Component;
}


export const withTheme = (theme) => (WrappedComponent) => {
  class Component extends React.PureComponent {
    render() {
      return (
        <WrappedComponent {...this.props} theme={theme} />
      )
    }
  }

  return Component;
}
