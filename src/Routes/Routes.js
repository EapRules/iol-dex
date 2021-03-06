import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/404/NotFound";
import { PokeContextProvider } from "../Context/PokeContext";
import { ThemeContextProvider } from "../Context/ThemeContext";

const Routes = () => {

  return (
    <Router>
      <ThemeContextProvider>
      <PokeContextProvider>
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route component={NotFound} />
        </Switch>
      </PokeContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default Routes;