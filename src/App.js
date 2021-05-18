import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux"
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";


import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { Redirect } from "react-router-dom";

import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }
        
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route 
            exact path="/signin" 
            render={() => this.props.currentUser 
              ? <Redirect to="/" /> 
              : <SignInAndSignOut />
            } 
          />
        </Switch>
      </div>
    );
  }
}
/*The thing to remember is that we cannot use our Action Creator 
setCurrentUser(user) we firstly need to dispatch it to props and only then by
calling it this.props.setCurrentUser() can we pass in our user*/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
