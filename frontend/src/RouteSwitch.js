import React from "react";
import DiffPage from "./components/DiffPage";
import Users from "./components/Users"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>                    
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/diff" element={<DiffPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch