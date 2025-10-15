import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;      // ignore empty entries
    setTasks([...tasks, task]);          // add new task
    setTask("");                         // clear input
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>✅ To-Do List</h2>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        style={{
          padding: "8px",
          width: "220px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "25px" }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              margin: "6px auto",
              padding: "10px",
              width: "270px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

