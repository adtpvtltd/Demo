import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNavigation } from './withNavigation';
import './Signup.css';
import SignupValidation from './SignupValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      error: null // To store fetch errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, phone } = this.state;

    // Call the validation function
    const validationErrors = SignupValidation({ name, email, password, phone });

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach(error => toast.error(error));
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserRegister");
        if (data.status === "ok") {
          toast.success("Registration successful!");
          this.props.navigate('/login'); 
        } else {
          this.setState({ error: data.error || 'Registration failed' });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.error('Error:', error);
      });
  }

  render() {
    const { error } = this.state;

    return (
      <div className='signup'>
        <ToastContainer />
        <div className='sign-con'>
          <form onSubmit={this.handleSubmit}>
            <h1>Signup</h1>
            <div className='signup-name'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                placeholder='Enter name'
                name='name'
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className='signup-email'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                placeholder='Enter Email'
                name='email'
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className='signup-password'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className='signup-phone'>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='tel'
                placeholder='Enter Phone Number'
                name='phone'
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <button type='submit' className='signup-btn'>Sign Up</button>
            <p>Already have an account?</p>
            <Link to='/login' className='signup-cre'>Log In</Link>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
  }
}

export default withNavigation(Signup);
