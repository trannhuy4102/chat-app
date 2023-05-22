import React from "react";
import { Link } from "react-router-dom";
import '../css/Login.css'
import firebase from "../firebase";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.props.history.push('/');
            console.log("Log in Success")
        }).catch(error => {
            this.setState({ error });
        });
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="auth-container">
                <h1>Login to access your account</h1>
                <p className="notification"></p>
                {error && <p className="error-message">{error.message}</p>}
                <div class="box">
                    <h1>Login</h1><br></br><br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div class="input-container">
                            <input type="email" onChange={this.handleChange}
                                required="" name="email" id="email" value={email} />
                            <label>Email</label>
                        </div><br></br>
                        <div class="input-container">
                            <input type="password" id="password" onChange={this.handleChange}
                                value={password} name="password" required="" />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <p>Don't have ann account ? <Link className="login-btn" to="/register">Register hehe</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;