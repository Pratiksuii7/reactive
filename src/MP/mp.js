import { useState, useEffect } from "react";
import NAVBAR from "./navbar";
import Footer from "./footer";
import { FiCheck, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Mp = () => {
  const [todos, setTodos] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("todo");
    const parsed = stored ? JSON.parse(stored) : [];
    setTodos(parsed);
    setColors(Array(parsed.length).fill("#474747"));
  }, []);

  const handleCheck = (index) => {
    const updated = [...colors];
    updated[index] = updated[index] === "#474747" ? "#00ff00" : "#474747";
    setColors(updated);
  };

  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        <h3>YOUR-TODO</h3>

        {todos && todos.length > 0 ? (
          todos.map((el, index) => (
            <div className="single_todo" key={index}>
              {el}
              <div>
                <Link to={`/view/${index}`}>
                  <FiEye
                    size={20}
                    style={{ color: "#474747", marginRight: "20px" }}
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
                  <FiCheck
                    size={20}
                    style={{
                      color: colors[index],
                      transition: "0.2s",
                    }}
                  />
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
