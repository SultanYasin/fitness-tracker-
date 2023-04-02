import React from "react";
import ReactDOM from "react-dom";

import "./index.css";


const Activities = React.lazy(()=>import("Activities/Activities"))

const App = () => (
  <div className="container">
    <React.Suspense fallback="Loading..." >
      <Activities />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
