import React from "react";
import DiffPage from "./components/DiffPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                <Route path="/diff" element={<DiffPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch