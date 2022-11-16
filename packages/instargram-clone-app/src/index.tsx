/******************************************************************************
 * Copyright (c) 2021. Moornmo Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of Moornmo Inc.                 *
 ******************************************************************************/
// import './wdyr'; // <--- first import

//
// import reportWebVitals from './reportWebVitals';
import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/index.css";
import "@progress/kendo-theme-default/dist/all.css";
import App from "./App";
import Login from "./pages/login";

ReactDOM.render(
    <React.StrictMode>
        <Login />,
    </React.StrictMode>,
    document.getElementById("root")
);

// reportWebVitals(console.log);
