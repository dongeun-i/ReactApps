/******************************************************************************
 * Copyright (c) 2021. Moornmo Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of Moornmo Inc.                 *
 ******************************************************************************/
// import './wdyr'; // <--- first import

//fuse lib
//
// import reportWebVitals from './reportWebVitals';
import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./react-chartjs-2-defaults";
import App from "./App";

// #region warning delete
const warn = console.warn;

function logWarning(...warnings: any[]) {
    let showWarning = true;
    warnings.forEach((warning) => {
        if (warning.includes) {
            if (warning.includes("UNSAFE_")) showWarning = false;
            else if (warning.includes("SourceMap")) showWarning = false;
            else if (warning.includes("DevTools")) showWarning = false;
            else if (warning.includes("implementation returned undefined"))
                showWarning = false;
        }
    });
    if (showWarning) warn(...warnings);
}

console.warn = logWarning;
// #endregion

//
ReactDOM.render(
    <React.StrictMode>
        {/* <ExampleFont /> */}
        {/* <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider> */}
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// reportWebVitals(console.log);
