import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
