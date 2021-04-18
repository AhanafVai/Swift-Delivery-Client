import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";

import Dashboard from "./Pages/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [orderInfo, setOrderInfo] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider
      value={[orderInfo, setOrderInfo, loggedInUser, setLoggedInUser]}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/service">
              <ServicePage />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
