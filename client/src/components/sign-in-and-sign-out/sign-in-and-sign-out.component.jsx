import React from 'react';
import SignIn from '../sign-in/sign-in.component'
import SignUp from "../sign-up/sign-up.component";

import './sign-in-and-sign-out.style.scss'

const SignInAndSignOut = (props) => {
  return (
      <div className="sign-in-and-sign-out">
        <SignIn />
        <SignUp />
      </div>
  );
}

export default SignInAndSignOut;