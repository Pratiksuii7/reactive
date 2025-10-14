import { useState, useEffect } from "react";
import NAVBAR from "./navbar";
import Footer from "./footer";
import { FiEye } from "react-icons/fi";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Mp = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todo");
    const parsed = stored ? JSON.parse(stored) : [];
    setTodos(parsed);
    setCompleted(Array(parsed.length).fill(false));
  }, []);

  // Toggle completed background
  const handleCheck = (index) => {
    const updated = [...completed];
    updated[index] = !updated[index];
    setCompleted(updated);
  };

  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        <h3>YOUR-TODO</h3>

        {todos && todos.length > 0 ? (
          todos.map((el, index) => (
            <div
              className="single_todo"
              key={index}
              style={{
                backgroundColor: completed[index] ? "#00ff00" : "#f5f5f5",
                color: completed[index] ? "#ffffff" : "#333",
                borderRadius: "10px",
                padding: "10px 15px",
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  textDecoration: completed[index] ? "line-through" : "none",
                  fontWeight: "500",
                }}
              >
                {typeof el === "object" ? el.text || "Untitled" : el}
              </span>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to={`/view/${index}`}>
                  <FiEye
                    size={20}
                    style={{
                      color: "#474747",
                      marginRight: "15px",
                      cursor: "pointer",
                    }}
                  />
                </Link>

                <button
                  onClick={() => handleCheck(index)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {completed[index] ? (
                    <BsCheckCircleFill size={22} color="#ffffff" />
                  ) : (
                    <BsCheckCircle size={22} color="#474747" />
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <center>
            Nothing on your TO-DO <Link to={"/add"}>add some</Link>
          </center>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Mp;
