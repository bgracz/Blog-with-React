import React from "react";
import Navigation from "./Navigation";
import Darkmode from "./DarkMode";

function Menu() {
    return (
        <div class="menu">
            <h1>The Blog</h1>
            <div class="links">
                <Navigation />
            </div>
            <div class="footer">
                <Darkmode />
                <p>Copyright by Blazej Gracz 2022.</p>
            </div>
        </div>)
}

export default Menu;