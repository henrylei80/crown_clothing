import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
