import React, { useState } from "react";
import Icon from './night-mode.png';

function Darkmode() {

    let theme = localStorage.getItem("displaymode");
    let [mode, setMode] = useState(theme);

    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    return (<img alt="darkmode toggle" className="darkModeIcon" src={Icon}
        onClick={() => {
            if (mode === "dark") {
                setMode("light");
                localStorage.setItem("displaymode", mode);
            } else {
                setMode("dark");
                localStorage.setItem("displaymode", mode);
            }
        }
        } />)
}

export default Darkmode;
