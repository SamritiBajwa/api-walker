import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HeaderForm from "./components/HeaderForm";
import Planet from "./views/Planet";
import People from "./views/People";
import Planets from "./views/Planet";

function App() {
  return (
    <BrowserRouter>
      <h1>Star Wars API</h1>
      <HeaderForm/>


      <Switch>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
      </Switch>

    </BrowserRouter>
  
  );
}

export default App;
