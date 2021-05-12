import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const Hats = () => (<div><h1>HATS</h1></div>)

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop/hats" component={Hats}/>
      </Switch>
    </div>
  );
}
export default App;
