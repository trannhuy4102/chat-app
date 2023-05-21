import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/Login">Login</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);