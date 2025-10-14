import { useRef } from "react";
import Footer from "../MP/footer";
import NAVBAR from "../MP/navbar";

import { useNavigate } from "react-router-dom";

const Td = () => {
  const tdtxt = useRef();
  const navigate = useNavigate();

  const addTODO = (e) => {
    e.preventDefault();
    const todostring = tdtxt.current.value;

    const initialtodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialtodo.push(todostring);
    localStorage.setItem("todo", JSON.stringify(initialtodo));
    navigate("/");
  };
  return (
    <>
      <NAVBAR />
      <div className="page todo_container">
        <h1>
          <div className="gang">ADD TO-DO:</div>
        </h1>
        <form onSubmit={addTODO}>
          <input type="text" ref={tdtxt} />
          <button>SAVE</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Td;
