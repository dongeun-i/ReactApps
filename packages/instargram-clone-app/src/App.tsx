/******************************************************************************
 * Copyright (c) 2021. Moornmo Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of Moornmo Inc.                 *
 * src/App.tsx
 * actions :
 * set_data -> client data setting
 * lasy modify : jh.jeong
 ******************************************************************************/
// Library
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jQuery from "jquery";
//
// Module
//
//fuse lib
//
import { PageList } from "./pages/page_list";

const App: React.FunctionComponent<any> = (props) => {
    Object.assign(window, { toast: (str: string) => {} });
    Object.assign(window, { $: jQuery });

    return (
        <BrowserRouter>
            <PageList />
        </BrowserRouter>
    );
};

export default App;
