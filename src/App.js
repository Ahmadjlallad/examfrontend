import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginCard from "./components/LoginCard";
import FavFruit from "./components/FavFruit";
import Home from "./components/Home";
class App extends React.Component {
  render() {
    console.log("app", this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <LoginCard />}
            </Route>
            <Route exact path="/favFruit">
              {isAuthenticated ? <FavFruit /> : <LoginCard />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
