import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from "./Home";
import { Contact, Faq, Gallery } from "./pages";

export function AppRoutes(): JSX.Element {
    return (
        <>
        <Routes>
            <Route path={"/"}
                element={<Home/>} />
            <Route
                path={"/contact"}
                element={<Contact/>}/>
            <Route
                path={"/faq"}
                element={<Faq/>}/>
            <Route
                path={"/gallery"}
                element={<Gallery/>}/>
            <Route
                path={"*"}
                element={<Navigate to={"/"} replace/>}/>
        </Routes></>
        
    )
}