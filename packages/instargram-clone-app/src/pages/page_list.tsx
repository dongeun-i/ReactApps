/******************************************************************************
 * Copyright (c) 2022. DONEUN LEE . Rights reserved.                          *
 * Data modelings and methods used are assets of Moornmo Inc.                 *
 * src/App.tsx
 * actions :
 * set_data -> client data setting
 * lasy modify : dongeun-i
 *
 * TO DO :  constants 네비게이션을 loop 하여 자동 route 생성 기능 추가
 ******************************************************************************/
//Library
import React, { useState, useEffect, Suspense, lazy } from "react";
// import { useHistory, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//
//module
//

export const PageList = () => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            {/* <Switch> */}
            {/* <Route exact path="/login" component={LoginPage} /> */}
            {/* </Switch> */}
        </Suspense>
    );
};
