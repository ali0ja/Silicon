import logoLight from "../assets/imges/logo.svg";
import logoDark from "../assets/imges/silicon-light.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const hasDarkmode = localStorage.getItem("darkmode");
    if (hasDarkmode !== null) {
      return hasDarkmode === "true";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkmode", "false");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <div className="main-page-light">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              {/* Conditionally render logo based on dark mode state */}
              <img
                loading="lazy"
                src={isDarkMode ? logoDark : logoLight}
                className="img"
                alt="Logo"
              />
              <div className="menu">Features</div>
            </div>
            <div className="div-4">
              <div className="switch">
                <div className="text">Dark Mode</div>
                <div className="light-toggle">
                  <label className="switch" aria-label="darkmode switch">
                    <input
                      type="checkbox"
                      className="slider-input"
                      id="darkmode-switch"
                      checked={isDarkMode}
                      onChange={handleDarkModeToggle}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="btn">
                <button className="sign-btn">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b430630a192092c7529dae164f3def2e60f00abb55aeb8d42d4778f6ac3890cc?placeholderIfAbsent=true&apiKey=96094968e4fd40e2830af3958b005ead"
                    alt="User Icon"
                    className="icon"
                  />
                  Sign in / up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
