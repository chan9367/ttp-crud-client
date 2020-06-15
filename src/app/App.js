import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBarContainer } from "../components/containers";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarContainer />
        <header><Link to="/campuses/new" className="add-campus">
        Add Campus
      </Link></header>
        <body className="app-header">
          <RoutesContainer />
        </body>
      </div>
    );
  }
}

export default App;
