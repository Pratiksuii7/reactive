import { useNavigate, useParams } from "react-router-dom";
import NAVBAR from "./MP/navbar";
import { AiFillDelete } from "react-icons/ai";

const View = () => {
  const nvi = useNavigate();
  const para = useParams();
  const id = para.id;
  const getSto = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const frDta = getSto[id];

  const goback = () => {
    nvi("/");
  };
  const deletetodo = () => {
    nvi("/", { replace: true });
    getSto.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(getSto));
  };
  return (
    <>
      <NAVBAR />
      <div className="ramu">
        <button onClick={goback}>Go Back</button>
      </div>
      <div
        className="single_todo"
        style={{ marginBottom: "20px", fontSize: "24px" }}
      >
        <b>{frDta}</b>
      </div>
      <button style={{ background: "red" }} onClick={deletetodo}>
        Delete TO-DO <AiFillDelete style={{ color: "white", fontSize: "15" }} />
      </button>
    </>
  );
};

export default View;
