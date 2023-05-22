import React from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import Login from './Login';
import '../css/Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: null
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { email, username, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            const user = firebase.auth().currentUser;
            user.updateProfile({ displayName: username }).then(() => {
                this.props.history.push('/');
            }).catch(error => {
                this.setState({ error });
            });
        }).catch(error => {
            this.setState({ error });
        })
        console.log("Submitting Registration...");
    }

    render() {
        const { username, email, password, error } = this.state;
        return (

            <div className="auth-container">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
                <h1>Register</h1>
                {error && <p id="error" className="error-message">{error.message}</p>}
                {/* <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} id="username" onChange={this.handleChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} id="email" onChange={this.handleChange}></input>
                    <label htmlFor="password">Choose a password </label>
                    <input type="password" name="password" id="password" value={password} onChange={this.handleChange}></input>
                    <button className="submit">Get Started</button>
                    <p>Already have an account ? <Link className="Login-btn" to="/Login">Login here</Link></p>
                </form> */}
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" id="username" onChange={this.handleChange}
                            aria-describedby="emailHelp" placeholder="Enter Your name" value={username} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your Username with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" value={email} onChange={this.handleChange}
                            aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange}
                            id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit </button>
                    <p>Already have an account ? <Link className="Login-btn" to="/Login">Login here</Link></p>

                </form>
            </div>
        )
    }
}
export default Register;