import './App.css';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Routes = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
)

class RoutesPureWrapper extends React.PureComponent {
  render = () => <Routes />
}

const RoutesFunctionalWrapper = () => <Routes />

const RoutesPureWrapperWithRouter = withRouter(RoutesPureWrapper)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <h1>Routes in functional wrapper</h1>
      <RoutesFunctionalWrapper />

      <hr/>

      <h1>Routes in pure wrapper</h1>
      <RoutesPureWrapper />

      <hr/>

      <h1>Routes in pure wrapper wrapped in withRouter</h1>
      <RoutesPureWrapperWithRouter />
    </div>
  </Router>
)
export default BasicExample
