import React, {useState} from 'react';
import {connect} from "react-redux";
import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {
  
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const {displayName, email, password, confirmPassword} = userCredentials;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords mismatch");
      return;
    }
    
    signUpStart({displayName, email, password})
    
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
  };
  /*note previous values are spread out in curly brackets*/
  const handleChange = e => {
    const {name, value} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
  }
  
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          value={password}
          required
        />
        <FormInput 
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);