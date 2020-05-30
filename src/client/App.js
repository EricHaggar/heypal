import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
