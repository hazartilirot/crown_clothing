import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux"
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Redirect } from "react-router-dom";

import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";

import {checkUserSessions} from './redux/user/user.actions'

const App = ({checkUserSessions, currentUser}) => {

  useEffect(() => {
    checkUserSessions();
  }, [checkUserSessions])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route 
          exact path="/signin" 
          render={() => currentUser 
            ? <Redirect to="/" /> 
            : <SignInAndSignOut />
          } 
        />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  checkUserSessions: () => dispatch(checkUserSessions())
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
