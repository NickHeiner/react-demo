import React, { PureComponent } from 'react';
import _ from 'lodash';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const RootPage = () => <p>root path</p>
const OtherPage = () => <p>other path</p>

class Routes extends PureComponent {
  render = () => <div>
    <Route path="/" exact component={RootPage} />
    <Route path="/other" exact component={OtherPage} />
  </div>
}

const PassthroughComponent = ({children}) => children;

class App extends PureComponent {
  render() {
    return <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>

        <h1>With Passthrough</h1>
        <PassthroughComponent>
          <Routes />
        </PassthroughComponent>

        <h1>Without Passthrough</h1>
        <Routes />
      </div>
    </BrowserRouter>;
  }
}

export default App;
