import React from "react";
import Homepage from "./scenes/homepage/homepage";
import "../../node_modules/normalize-scss/sass/normalize/_import-now.scss";
import "./styles/styles.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Homepage} />
    </Router>
  );
};

export default App;
