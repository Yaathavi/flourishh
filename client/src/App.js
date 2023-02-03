import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
