import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { auth, provider } from './firebase';
import firebase from './firebase';


class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logOutUser = () => {
    firebase.auth().signOut()
      .then(window.location = "/");

  }

  render() {
    return (
      <Router>
        <div className="app">
          <nav className="main-nav">
            {!this.state.user &&
              <div>
                <Link to="/register">Register</Link>
                <Link to="/Login">Login</Link>
                <Link to="/">Home</Link>

              </div>
            }
            {this.state.user &&
              <a href='#!' onClick={this.logOutUser}>Log out</a>
            }

          </nav>
          <Switch>
            <Route path="/" exact render={() => <App user={this.state.user} />} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);