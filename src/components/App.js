import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
    render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/movies">movies</Link></li>
          <li><Link to="/books">books</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;