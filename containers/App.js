import React, { Component } from 'react';
import Header from './header/Header';
import Home from './home/Home';

class App extends Component {

  render() {

    return(
        <div>
          <Header/>
          <Home />
        </div>
    )
  }
}

export default App;