import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

import "./sing-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
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
}
/*Don't you ever forget to dispatch an action "function" if you're going to
 use it in props of a component!*/
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
