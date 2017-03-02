import React, { Component } from 'react';
import Header from './Header';

class App extends Component {

  render() {
    const { children } = this.props;
    return(
        <div>
          {children}
        </div>
    )
  }
}

export default App;