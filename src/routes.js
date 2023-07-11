import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './containers/home'
import Orders from './containers/orders'
function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/orders" element={<Orders/>} />
            </Routes>
        </Router>
    )

}
export default MyRoutes