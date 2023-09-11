import React from "react";
import DiffPage from "./components/DiffPage";
import Users from "./components/Users"
import {BrowserRouter, Routes, Route} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/diff" element={<DiffPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch