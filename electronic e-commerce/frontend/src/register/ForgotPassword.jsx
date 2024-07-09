import React, { Component } from 'react';
import './ForgotPassword.css'; // Create a CSS file for styling
import {Link} from 'react-router-dom'

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userinfo");
        if (data && data.status) {
          alert(data.status);
        } else {
          
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  }

  render() {
    return (
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
           <Link to='/login'>Go Back</Link>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
