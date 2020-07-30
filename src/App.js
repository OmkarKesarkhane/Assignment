import React from "react";
import StudentResultBoard from "./Components/StudentResultBoard/StudentResultBoard";
import AdmissionForm from "./Components/AdmissionForm/AdmissionForm";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={StudentResultBoard}></Route>
          <Route exact path="/addmissionform" component={AdmissionForm}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
