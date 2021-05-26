import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

import "./sing-in.styles.scss";

const SignIn = ({googleSignInStart, emailSignInStart}) => {
  
  const [userCredentials, setUserCredentials] = 
      useState({email: '', password: ''})
  

  const {email, password} = userCredentials;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(userCredentials);
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    
    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
/*Don't you ever forget to dispatch an action "function" if you're going to
 use it in props of a component!*/
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignIn);
