import React, { Component } from 'react';
import Footer from './Footer';
import Aside from './Aside';
import Section from './Section';

class App extends Component {
    render() {
    return (
      <div className="wrap">
        <Aside />
        <div className="container">
           <Section />
        </div>
      </div>
    )
  }
}

export default App;