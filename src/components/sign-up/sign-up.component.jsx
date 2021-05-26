import React, {Component} from 'react';
import {connect} from "react-redux";
import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signUpStart} from "../../redux/user/user.actions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const {displayName, email, password, confirmPassword} = this.state;
    const {signUpStart} = this.props;
    
    if (password !== confirmPassword) {
      alert("Passwords mismatch");
      return;
    }
    
    signUpStart({displayName, email, password})
    
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
  };
  
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            onChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            onChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={password}
            required
          />
          <FormInput 
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);