import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./components/sign-in-and-sign-out/sign-in-and-sign-out.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (!userAuth) {
        this.setState({currentUser: userAuth})
        return
      }
        
      const userRef = await createUserProfileDocument(userAuth);
      
      const unsubscribe = userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

      });
      unsubscribe();
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}
export default App;
