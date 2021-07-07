import React, { Component } from "react";
import "./App.css";

import Header from './Header'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
