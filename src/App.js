import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CaptureScreen from "./screens/Capture";
import Clockin from "./screens/Clockin";
import ClockinError from "./screens/ClockinError";
import ClockinSuccess from "./screens/ClockinSuccess";
import ClockOut from "./screens/ClockOut";
import ClockoutSuccess from "./screens/ClockoutSuccess";
import Enrollment from "./screens/Enrollment";
import Home from "./screens/Home";
import VerifyScreen from "./screens/VerifyCapture";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/enrol" exact component={Enrollment} />
        <Route path="/capture" exact component={CaptureScreen} />
        <Route path="/verify" exact component={VerifyScreen} />
        <Route path="/success" exact component={ClockinSuccess} />
        <Route path="/error" exact component={ClockinError} />
        <Route path="/clockin" exact component={Clockin} />
        <Route path="/clockout" exact component={ClockOut} />
        <Route path="/clockoutsuccess" exact component={ClockoutSuccess} />
      </Switch>
    </Router>
  );
}

export default App;
