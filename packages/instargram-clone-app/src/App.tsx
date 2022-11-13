/******************************************************************************
 * Copyright (c) 2022. DONEUN LEE . Rights reserved.                          *
 * Data modelings and methods used are assets of Moornmo Inc.                 *
 * src/App.tsx
 * actions :
 * set_data -> client data setting
 * lasy modify : dongeun-i
 ******************************************************************************/
// Library
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jQuery from "jquery";
//
// Module
//
//fuse lib
import "moment/locale/ko";
import "@progress/kendo-theme-default/dist/all.css";
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
