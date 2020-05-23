import React, { Component, Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ApolloProvider client={client}>
          <Router>
            <div className="container">
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </Router>
        </ApolloProvider>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
