import React from "react";
import ReactDOM from "react-dom";
import Activities from "./Activities";
import { FitnessProvider } from "DataStore/Store";

import "./index.css";

const App = () => (
  <div className="container">
    <React.Suspense fallback="Loading...">
      <FitnessProvider>
        <Activities />
      </FitnessProvider>
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
