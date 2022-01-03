import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './Menu';
import Blog from "./Blog";
import Contact from "./Contact";
import Error from "./Error";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;