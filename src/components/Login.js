import React from "react";
import '../css/Login.css'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div class="box">
                    <form>
                        <span class="text-center">login</span>
                        <div class="input-container">
                            <input type="text" required="" />
                            <label>Full Name</label>
                        </div>
                        <div class="input-container">
                            <input type="mail" required="" />
                            <label>Email</label>
                        </div>
                        <button type="button" class="btn">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;