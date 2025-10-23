import { Route, Routes, useNavigate } from "react-router-dom";
import NAVBAR from "./MP/navbar";
import Footer from "./MP/footer";
import React from "react";
import { BiColor } from "react-icons/bi";

const Log = () => {
  const nav = useNavigate();
  const [name, setName] = React.useState(
    () => localStorage.getItem("username") || ""
  );
  const [logged, setLogged] = React.useState(
    Boolean(localStorage.getItem("loggedIn"))
  );

  const handleLogin = () => {
    if (name && name.trim() !== "") {
      localStorage.setItem("username", name.trim());
    }
    localStorage.setItem("loggedIn", true);
    setLogged(true);
    nav("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    // keep username but clear logged flag
    setLogged(false);
    nav("/");
  };

  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        {logged ? (
          <>
            <div className="welcome-text">
              Welcome back,{" "}
              {name || localStorage.getItem("username") || "Guest"}!
            </div>
            <div className="login-actions">
              <button className="action-buttons todo-button">Your To do</button>
            </div>
            <div className="login-actions">
              <button className="action-buttons creator-button">
                <a
                  href="https://prasoonkandel.vercel.app"
                  style={{ color: "white" }}
                >
                  About developer
                </a>
              </button>
            </div>
            <div className="login-actions">
              <button
                className=" action-buttons logout-button"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <div className="login-form">
            <label htmlFor="username" className="login-label">
              Enter your name
            </label>
            <input
              id="username"
              className="login-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => {
                if (name && name.trim() !== "") {
                  localStorage.setItem("username", name.trim());
                }
              }}
            />

            <div className="login-actions">
              <button className="login-button" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        )}
      </div>
      <Routes>
        <Route
          path="/log/info"
          element={
            <>
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
              Jay Shree Ram <br />
            </>
          }
        ></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default Log;
