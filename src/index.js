import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();