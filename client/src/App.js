import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Logo from "./spacex.png";

import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img className="logo" src={Logo} alt="SpaceX" />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
