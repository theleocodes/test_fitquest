// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import reportWebVitals from "./reportWebVitals";

// import App from './App';

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
// document.getElementById("root"));

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);