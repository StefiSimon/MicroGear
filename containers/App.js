import React, { Component } from 'react';
import Header from './header/Header';
import MainView from './MainView';

class App extends Component {

  render() {

    return(
        <div>
          <Header/>
          <MainView />
        </div>
    )
  }
}

export default App;