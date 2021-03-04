import React from "react";
import "./App.css";
import Register from "./hooks/users/UserReg";
import Login from "./hooks/users/UserLogin";
import InfoCards from "./hooks/users/InfoCards";
import PrivateRoute from "./hooks/utils/privateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/info" component={InfoCards} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
