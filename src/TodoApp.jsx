import React, { useState, useEffect } from "react";
import "./styles/root.css";
import "./styles/app.css";

const TodoApp = () => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("todo_items");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todo_items", JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const newItem = { id: Date.now(), text: trimmed, done: false };
    setItems((s) => [newItem, ...s]);
    setText("");
  };

  const toggle = (id) => {
    setItems((s) =>
      s.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  };

  const remove = (id) => {
    setItems((s) => s.filter((it) => it.id !== id));
  };

  return (
    <div
      className="todo-root"
      style={{
        background: "var(--primary-bg)",
        minHeight: "100vh",
        color: "var(--text-color)",
        padding: 24,
      }}
    >
      <div
        className="todo-card"
        style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "var(--secondary-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: 8,
          padding: 20,
        }}
      >
        <h1 style={{ margin: 0, color: "var(--accent-color)" }}>Todo</h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6 }}>
          Simple focused list — add tasks, toggle complete, delete. Persisted in
          your browser.
        </p>

        <form
          onSubmit={addItem}
          style={{ display: "flex", gap: 8, marginTop: 16 }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
            style={{
              flex: 1,
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid var(--border-color)",
              background: "transparent",
              color: "var(--text-color)",
            }}
          />
          <button
            type="submit"
            style={{
              background: "var(--accent-color)",
              color: "#042029",
              border: "none",
              padding: "10px 14px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>

        <div style={{ marginTop: 18 }}>
          {items.length === 0 ? (
            <p style={{ color: "var(--text-secondary)" }}>
              No tasks yet. Add one above.
            </p>
          ) : (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 10,
              }}
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 12,
                    borderRadius: 6,
                    border: "1px solid var(--border-color)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggle(item.id)}
                    />
                    <span
                      style={{
                        color: item.done
                          ? "var(--text-secondary)"
                          : "var(--text-color)",
                        textDecoration: item.done ? "line-through" : "none",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => remove(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
