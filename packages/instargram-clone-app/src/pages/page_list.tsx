import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
//
//module

const LoginPage = lazy(() => import("./login.page"));
export const PageList = () => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
                {/* <Route  path="/home" element={HomeMainPage} /> */}
                <Route path="/login" element={<LoginPage />} />
                {/* <Route  path="/settings" element={SettingPage} /> */}
                {/* <Route  path="/admin" element={AdminMainPage} /> */}
                {/* <Route  path="/order" element={OrderMainListPage} /> */}
                {/* <Route  path="/available/list" element={AvailableListPage} /> */}
            </Routes>
        </Suspense>
    );
};
