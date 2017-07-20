import React, { PureComponent } from 'react';
import _ from 'lodash';
import './App.css';

class PureChildElem extends React.PureComponent {
  render() {
    console.log('Pure child elem render');
    return <p>Pure Child Elem</p>;
  }
}

class ChildElem extends React.Component {
  render() {
    console.log('Child elem render');
    return <p>Child Elem</p>;
  }
}

class RootElem extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  handleClick = () => this.setState({counter: this.state.counter + 1});

  render() {
    console.log('RootElem render');
    return <div>
      <button onClick={this.handleClick}>Change root elem state</button>
      <ChildElem />
      <PureChildElem />
    </div>;
  }
}

class App extends PureComponent {
  render() {
    return <div>
      <RootElem />
    </div>;
  }
}

export default App;
