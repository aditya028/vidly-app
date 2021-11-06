import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import SaveMovies from "./components/saveMovies";
import Login from "./components/login";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Route path="/movies/:id" component={SaveMovies} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={Login} />
          <Redirect from="/" exact to="/movies" />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
