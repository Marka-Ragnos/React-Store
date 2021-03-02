import React from "react";
import HomePage from "../../pages/home-page";
import ShopHeader from "../shop-header";
import CartPage from "../../pages/cart-page";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
