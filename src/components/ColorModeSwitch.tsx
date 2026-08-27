import { useState, useEffect } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const ColorModeSwitch = () => {
  // 1. Initialize state from localStorage or default to 'dark'
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "dark",
  );

  // 2. Update html attribute and localStorage whenever theme state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Toggle handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="form-check form-switch d-flex align-items-center gap-2 m-0">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="colorModeSwitch"
        checked={theme === "dark"}
        onChange={toggleTheme}
        style={{ cursor: "pointer" }}
      />
      <label
        className="form-check-label d-flex align-items-center gap-1 user-select-none"
        htmlFor="colorModeSwitch"
        style={{ cursor: "pointer" }}
      >
        {theme === "dark" ? (
          <BsMoonStars color="gold" />
        ) : (
          <BsSun color="orange" />
        )}
        <span className="ms-1 fs-6 fw-semibold text-nowrap">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};

export default ColorModeSwitch;
