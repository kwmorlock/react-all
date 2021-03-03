import React from "react";
import "./App.css";
import Register from "./hooks/users/UserReg";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
