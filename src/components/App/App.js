import React from "react";
import Tracker from '../Tracker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import 'antd/dist/antd.less'; 

const App = () => (
  <Router>
    <div id="app">
      <Header />

      <div id="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tracker" component={Tracker} />
      </div>
    </div>
  </Router>
);

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const Header = () => (
  <nav id="topnav">
    <h1>Demo</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/tracker">Tracker</Link>
      </li>
    </ul>
  </nav>
);

export default App;